import { Injectable } from '@angular/core';
import { PDFDocument, PDFFont, PDFPage, StandardFonts, rgb } from 'pdf-lib';
import { Client, WorkoutSheet } from '../../shared/models/client.model';
import { Exercise, MUSCLE_GROUPS, exerciseDisplayName } from '../../shared/models/exercise.model';

const PAGE_WIDTH = 595;
const PAGE_HEIGHT = 842;
const MARGIN = 40;
const WEEK_COLUMNS = 5;

// Colore primario dell'app (--sa-primary: #4f46e5) in RGB 0..1, per il logo
// e le intestazioni. Il PDF e' generato interamente lato client con pdf-lib:
// nessuno screenshot, e' una vera tabella disegnata punto per punto.
const PRIMARY = rgb(0x4f / 255, 0x46 / 255, 0xe5 / 255);
const TEXT_DARK = rgb(0.1, 0.1, 0.15);
const TEXT_MUTED = rgb(0.4, 0.4, 0.45);
const BORDER = rgb(0.85, 0.85, 0.88);
const HEADER_FILL = rgb(0.95, 0.95, 0.98);

interface Column {
  label: string;
  width: number;
}

const COLUMNS: Column[] = [
  { label: 'Esercizio', width: 190 },
  { label: 'Serie', width: 30 },
  { label: 'Rip.', width: 35 },
  { label: 'Recupero', width: 45 },
  ...Array.from({ length: WEEK_COLUMNS }, (_, i) => ({ label: `Sett. ${i + 1}`, width: 43 })),
];

const muscleGroupLabel = (value: string): string => MUSCLE_GROUPS.find((mg) => mg.value === value)?.label ?? value;

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
      }
    };

    y = this.drawHeader(page, font, fontBold, client, sheet, y);

    for (const day of sheet.days) {
      ensureSpace(70);
      const muscleSummary = day.muscleGroups.map(muscleGroupLabel).join(', ');
      const dayTitle = muscleSummary ? `${day.label} — ${muscleSummary}` : day.label;
      page.drawRectangle({ x: MARGIN, y: y - 20, width: PAGE_WIDTH - MARGIN * 2, height: 22, color: PRIMARY });
      page.drawText(dayTitle.toUpperCase(), { x: MARGIN + 8, y: y - 15, size: 10.5, font: fontBold, color: rgb(1, 1, 1) });
      y -= 30;

      if (day.exercises.length === 0) {
        page.drawText('Nessun esercizio in questo giorno.', { x: MARGIN, y, size: 9.5, font: fontItalic, color: TEXT_MUTED });
        y -= 20;
        continue;
      }

      y = this.drawTableHeader(page, fontBold, y);

      for (const entry of day.exercises) {
        const exercise = exercisesById.get(entry.exerciseId);
        const nameEn = exercise?.name ?? entry.exerciseId;
        const nameIt = exercise?.nameIt ?? null;
        const rowHeight = entry.notes ? 46 : 34;

        ensureSpace(rowHeight);
        if (y === PAGE_HEIGHT - MARGIN) {
          // siamo appena andati a capo pagina: ripeti l'intestazione tabella
          y = this.drawTableHeader(page, fontBold, y);
        }

        y = this.drawTableRow(page, font, fontBold, fontItalic, y, rowHeight, nameEn, nameIt, entry);
      }

      y -= 16;
    }

    return doc.save();
  }

  private drawHeader(page: PDFPage, font: PDFFont, fontBold: PDFFont, client: Client, sheet: WorkoutSheet, y: number): number {
    this.drawLogo(page, MARGIN, y - 26);
    page.drawText('SCHEDE ALLENAMENTO', { x: MARGIN + 34, y: y - 16, size: 13, font: fontBold, color: PRIMARY });
    y -= 46;

    page.drawText(`${client.first_name} ${client.last_name}`, { x: MARGIN, y, size: 17, font: fontBold, color: TEXT_DARK });
    y -= 20;
    page.drawText(sheet.title, { x: MARGIN, y, size: 11, font, color: TEXT_MUTED });
    y -= 14;

    page.drawLine({
      start: { x: MARGIN, y },
      end: { x: PAGE_WIDTH - MARGIN, y },
      thickness: 1,
      color: BORDER,
    });
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

  private drawTableHeader(page: PDFPage, fontBold: PDFFont, y: number): number {
    const headerHeight = 20;
    page.drawRectangle({ x: MARGIN, y: y - headerHeight, width: PAGE_WIDTH - MARGIN * 2, height: headerHeight, color: HEADER_FILL });

    let x = MARGIN;
    for (const col of COLUMNS) {
      page.drawText(col.label, { x: x + 4, y: y - 14, size: 8.5, font: fontBold, color: TEXT_DARK });
      x += col.width;
    }
    this.drawRowBorders(page, y, headerHeight);
    return y - headerHeight;
  }

  private drawTableRow(
    page: PDFPage,
    font: PDFFont,
    fontBold: PDFFont,
    fontItalic: PDFFont,
    y: number,
    rowHeight: number,
    nameEn: string,
    nameIt: string | null,
    entry: { sets: number; reps: string; rest: string; notes: string },
  ): number {
    this.drawRowBorders(page, y, rowHeight);

    let x = MARGIN;
    const nameCol = COLUMNS[0];
    const innerWidth = nameCol.width - 8;
    const truncatedNameEn = this.truncateToWidth(nameEn, fontBold, 8.5, innerWidth);
    page.drawText(truncatedNameEn, { x: x + 4, y: y - 12, size: 8.5, font: fontBold, color: TEXT_DARK });
    if (nameIt) {
      const truncatedNameIt = this.truncateToWidth(nameIt, fontItalic, 7.5, innerWidth);
      page.drawText(truncatedNameIt, { x: x + 4, y: y - 22, size: 7.5, font: fontItalic, color: TEXT_MUTED });
    }
    if (entry.notes) {
      const truncatedNotes = this.truncateToWidth(entry.notes, fontItalic, 7, innerWidth);
      page.drawText(truncatedNotes, { x: x + 4, y: y - 34, size: 7, font: fontItalic, color: TEXT_MUTED });
    }
    x += nameCol.width;

    const values = [String(entry.sets), entry.reps, entry.rest, '', '', '', '', ''];
    for (let i = 1; i < COLUMNS.length; i++) {
      const col = COLUMNS[i];
      const value = values[i - 1];
      if (value) {
        page.drawText(value, { x: x + 4, y: y - rowHeight / 2 - 3, size: 8.5, font, color: TEXT_DARK });
      }
      x += col.width;
    }

    return y - rowHeight;
  }

  private drawRowBorders(page: PDFPage, y: number, rowHeight: number): void {
    let x = MARGIN;
    for (const col of COLUMNS) {
      page.drawRectangle({
        x,
        y: y - rowHeight,
        width: col.width,
        height: rowHeight,
        borderColor: BORDER,
        borderWidth: 0.5,
      });
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
}
