import { Injectable } from '@angular/core';
import { PDFDocument, PDFFont, PDFImage, PDFPage, StandardFonts, rgb } from 'pdf-lib';
import { Client, TRAINING_TECHNIQUES, WorkoutDay, WorkoutSheet } from '../../shared/models/client.model';
import { Exercise, MUSCLE_GROUPS, exerciseImageUrl } from '../../shared/models/exercise.model';

const PAGE_WIDTH = 595;
const PAGE_HEIGHT = 842;
const MARGIN = 40;
const CONTENT_WIDTH = PAGE_WIDTH - MARGIN * 2;
const WEEK_COLUMNS = 5;
const IMAGE_SIZE = 28;

// Colore primario dell'app (--sa-primary: #4f46e5) in RGB 0..1, per il logo
// e le intestazioni. Il PDF e' generato interamente lato client con pdf-lib:
// nessuno screenshot, e' una vera tabella disegnata punto per punto.
const PRIMARY = rgb(0x4f / 255, 0x46 / 255, 0xe5 / 255);
const PRIMARY_TINT = rgb(0.94, 0.93, 0.99);
const TEXT_DARK = rgb(0.1, 0.1, 0.15);
const TEXT_MUTED = rgb(0.4, 0.4, 0.45);
const BORDER = rgb(0.85, 0.85, 0.88);
const HEADER_FILL = rgb(0.95, 0.95, 0.98);

interface Column {
  label: string;
  width: number;
}

// Ogni riga della tabella e' una singola serie: cosi' il peso si scrive per
// ogni serie, in ogni settimana del mese (5 colonne).
const COLUMNS: Column[] = [
  { label: 'Serie', width: 35 },
  { label: 'Ripetizioni', width: 65 },
  { label: 'Recupero', width: 50 },
  ...Array.from({ length: WEEK_COLUMNS }, (_, i) => ({ label: `Sett. ${i + 1}`, width: 73 })),
];

const muscleGroupLabel = (value: string): string => MUSCLE_GROUPS.find((mg) => mg.value === value)?.label ?? value;
const findTechnique = (value: string) => (value ? TRAINING_TECHNIQUES.find((t) => t.value === value) ?? null : null);

// Titolo del giorno basato sui muscoli davvero coinvolti dagli esercizi
// scelti (non sui filtri usati per cercarli, che possono essere piu' ampi).
function summarizeMuscles(day: WorkoutDay, exercisesById: Map<string, Exercise>): string {
  const values = new Set<string>();
  for (const entry of day.exercises) {
    const exercise = exercisesById.get(entry.exerciseId);
    exercise?.primaryMuscles.forEach((m) => values.add(m));
  }
  if (values.size === 0) {
    return day.muscleGroups.map(muscleGroupLabel).join(', ');
  }
  return [...values].map(muscleGroupLabel).join(', ');
}

@Injectable({ providedIn: 'root' })
export class PdfExportService {
  async downloadSheet(client: Client, sheet: WorkoutSheet, exercisesById: Map<string, Exercise>): Promise<void> {
    const bytes = await this.buildPdf(client, sheet, exercisesById);
    const blob = new Blob([bytes], { type: 'application/pdf' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${sheet.title.replace(/[^a-z0-9]+/gi, '_')}.pdf`;
    a.click();
    URL.revokeObjectURL(url);
  }

  private async buildPdf(client: Client, sheet: WorkoutSheet, exercisesById: Map<string, Exercise>): Promise<Uint8Array> {
    const doc = await PDFDocument.create();
    const font = await doc.embedFont(StandardFonts.Helvetica);
    const fontBold = await doc.embedFont(StandardFonts.HelveticaBold);
    const fontItalic = await doc.embedFont(StandardFonts.HelveticaOblique);

    let page = doc.addPage([PAGE_WIDTH, PAGE_HEIGHT]);
    let y = PAGE_HEIGHT - MARGIN;

    const ensureSpace = (needed: number) => {
      if (y - needed < MARGIN) {
        page = doc.addPage([PAGE_WIDTH, PAGE_HEIGHT]);
        y = PAGE_HEIGHT - MARGIN;
        return true;
      }
      return false;
    };

    y = this.drawHeader(page, font, fontBold, client, sheet, y);

    for (const day of sheet.days) {
      ensureSpace(50);
      const muscleSummary = summarizeMuscles(day, exercisesById);
      const dayTitle = muscleSummary ? `${day.label} — ${muscleSummary}` : day.label;
      page.drawRectangle({ x: MARGIN, y: y - 20, width: CONTENT_WIDTH, height: 22, color: PRIMARY });
      page.drawText(dayTitle.toUpperCase(), { x: MARGIN + 8, y: y - 15, size: 10.5, font: fontBold, color: rgb(1, 1, 1) });
      y -= 32;

      if (day.exercises.length === 0) {
        page.drawText('Nessun esercizio in questo giorno.', { x: MARGIN, y, size: 9.5, font: fontItalic, color: TEXT_MUTED });
        y -= 20;
        continue;
      }

      for (const entry of day.exercises) {
        const exercise = exercisesById.get(entry.exerciseId);
        const images = exercise ? await this.embedExerciseImages(doc, exercise) : [];
        const nameEn = exercise?.name ?? entry.exerciseId;
        const nameIt = exercise?.nameIt ?? null;

        const technique = findTechnique(entry.technique);
        const headerHeight = this.exerciseHeaderHeight(images.length > 0, !!entry.notes, !!technique);
        const setRowHeight = 20;

        ensureSpace(headerHeight + 18 + setRowHeight);

        y = this.drawExerciseHeader(page, font, fontBold, fontItalic, y, headerHeight, images, nameEn, nameIt, technique, entry.notes);
        y = this.drawColumnHeader(page, fontBold, y);

        for (let setIndex = 1; setIndex <= entry.sets; setIndex++) {
          if (ensureSpace(setRowHeight)) {
            y = this.drawColumnHeader(page, fontBold, y);
          }
          y = this.drawSetRow(page, font, y, setRowHeight, setIndex, entry.reps, entry.rest);
        }

        y -= 12;
      }

      y -= 12;
    }

    return doc.save();
  }

  private drawHeader(page: PDFPage, font: PDFFont, fontBold: PDFFont, client: Client, sheet: WorkoutSheet, y: number): number {
    this.drawLogo(page, MARGIN, y - 26);
    page.drawText('SCHEDE ALLENAMENTO', { x: MARGIN + 34, y: y - 16, size: 13, font: fontBold, color: PRIMARY });

    // Nome del coach: fisso per ora (un solo account trainer nell'app).
    const coachLabel = 'Coach: Cinzia Rosato';
    const coachWidth = font.widthOfTextAtSize(coachLabel, 10);
    page.drawText(coachLabel, { x: PAGE_WIDTH - MARGIN - coachWidth, y: y - 16, size: 10, font, color: TEXT_MUTED });

    y -= 46;

    page.drawText(`${client.first_name} ${client.last_name}`, { x: MARGIN, y, size: 17, font: fontBold, color: TEXT_DARK });
    y -= 20;
    page.drawText(sheet.title, { x: MARGIN, y, size: 11, font, color: TEXT_MUTED });
    y -= 14;

    page.drawLine({ start: { x: MARGIN, y }, end: { x: PAGE_WIDTH - MARGIN, y }, thickness: 1, color: BORDER });
    y -= 22;
    return y;
  }

  // Manubrio stilizzato: due dischi collegati da una barra, colore primario dell'app.
  private drawLogo(page: PDFPage, x: number, y: number): void {
    const barY = y;
    page.drawRectangle({ x: x + 6, y: barY - 2, width: 16, height: 4, color: PRIMARY });
    page.drawEllipse({ x: x + 4, y: barY, xScale: 4, yScale: 9, color: PRIMARY });
    page.drawEllipse({ x: x + 24, y: barY, xScale: 4, yScale: 9, color: PRIMARY });
    page.drawEllipse({ x: x + 1, y: barY, xScale: 2, yScale: 5.5, color: PRIMARY });
    page.drawEllipse({ x: x + 27, y: barY, xScale: 2, yScale: 5.5, color: PRIMARY });
  }

  private exerciseHeaderHeight(hasImages: boolean, hasNotes: boolean, hasTechnique: boolean): number {
    let h = hasImages ? IMAGE_SIZE + 8 : 22;
    if (hasNotes) {
      h += 12;
    }
    if (hasTechnique) {
      h += 12;
    }
    return h;
  }

  private drawExerciseHeader(
    page: PDFPage,
    font: PDFFont,
    fontBold: PDFFont,
    fontItalic: PDFFont,
    y: number,
    height: number,
    images: PDFImage[],
    nameEn: string,
    nameIt: string | null,
    technique: { label: string; description: string } | null,
    notes: string,
  ): number {
    page.drawRectangle({ x: MARGIN, y: y - height, width: CONTENT_WIDTH, height, borderColor: BORDER, borderWidth: 0.5, color: PRIMARY_TINT });

    let textX = MARGIN + 8;
    const imagesY = y - height / 2 - IMAGE_SIZE / 2;
    for (const img of images) {
      page.drawImage(img, { x: textX, y: imagesY, width: IMAGE_SIZE, height: IMAGE_SIZE });
      textX += IMAGE_SIZE + 6;
    }

    const textMaxWidth = MARGIN + CONTENT_WIDTH - textX - 8;
    const extraLines = (technique ? 1 : 0) + (notes ? 1 : 0);
    const label = nameIt ? `${nameEn}  —  ${nameIt}` : nameEn;
    const truncated = this.truncateToWidth(label, fontBold, 10, textMaxWidth);
    let lineY = extraLines > 0 ? y - height / 2 + (extraLines * 12) / 2 : y - height / 2 - 3;
    page.drawText(truncated, { x: textX, y: lineY, size: 10, font: fontBold, color: TEXT_DARK });

    if (technique) {
      lineY -= 13;
      const techniqueLine = this.truncateToWidth(`Tecnica: ${technique.label} — ${technique.description}`, font, 7.5, textMaxWidth);
      page.drawText(techniqueLine, { x: textX, y: lineY, size: 7.5, font, color: PRIMARY });
    }

    if (notes) {
      lineY -= 13;
      const truncatedNotes = this.truncateToWidth(notes, fontItalic, 8, textMaxWidth);
      page.drawText(truncatedNotes, { x: textX, y: lineY, size: 8, font: fontItalic, color: TEXT_MUTED });
    }

    return y - height;
  }

  private drawColumnHeader(page: PDFPage, fontBold: PDFFont, y: number): number {
    const h = 18;
    page.drawRectangle({ x: MARGIN, y: y - h, width: CONTENT_WIDTH, height: h, color: HEADER_FILL });
    let x = MARGIN;
    for (const col of COLUMNS) {
      page.drawText(col.label, { x: x + 4, y: y - 13, size: 7.5, font: fontBold, color: TEXT_DARK });
      x += col.width;
    }
    this.drawRowBorders(page, y, h);
    return y - h;
  }

  private drawSetRow(page: PDFPage, font: PDFFont, y: number, rowHeight: number, setIndex: number, reps: string, rest: string): number {
    this.drawRowBorders(page, y, rowHeight);
    let x = MARGIN;
    const values = [String(setIndex), reps, rest, '', '', '', '', ''];
    for (let i = 0; i < COLUMNS.length; i++) {
      const value = values[i];
      if (value) {
        page.drawText(value, { x: x + 6, y: y - rowHeight / 2 - 3, size: 8.5, font, color: TEXT_DARK });
      }
      x += COLUMNS[i].width;
    }
    return y - rowHeight;
  }

  private drawRowBorders(page: PDFPage, y: number, rowHeight: number): void {
    let x = MARGIN;
    for (const col of COLUMNS) {
      page.drawRectangle({ x, y: y - rowHeight, width: col.width, height: rowHeight, borderColor: BORDER, borderWidth: 0.5 });
      x += col.width;
    }
  }

  private truncateToWidth(text: string, font: PDFFont, size: number, maxWidth: number): string {
    if (font.widthOfTextAtSize(text, size) <= maxWidth) {
      return text;
    }
    let truncated = text;
    while (truncated.length > 1 && font.widthOfTextAtSize(truncated + '…', size) > maxWidth) {
      truncated = truncated.slice(0, -1);
    }
    return truncated + '…';
  }

  private async embedExerciseImages(doc: PDFDocument, exercise: Exercise): Promise<PDFImage[]> {
    const images: PDFImage[] = [];
    for (const path of exercise.images.slice(0, 2)) {
      const embedded = await this.embedImage(doc, path);
      if (embedded) {
        images.push(embedded);
      }
    }
    return images;
  }

  private async embedImage(doc: PDFDocument, path: string): Promise<PDFImage | null> {
    try {
      const response = await fetch(exerciseImageUrl(path));
      if (!response.ok) {
        return null;
      }
      const bytes = new Uint8Array(await response.arrayBuffer());
      if (path.toLowerCase().endsWith('.png')) {
        return await doc.embedPng(bytes);
      }
      return await doc.embedJpg(bytes);
    } catch {
      return null;
    }
  }
}
