import { Injectable } from '@angular/core';
import { PDFDocument, PDFFont, PDFPage, StandardFonts, rgb } from 'pdf-lib';
import { Client, WorkoutSheet } from '../../shared/models/client.model';
import { Exercise, exerciseDisplayName, exerciseImageUrl } from '../../shared/models/exercise.model';

const PAGE_MARGIN = 40;
const IMAGE_SIZE = 70;

// Genera un PDF della scheda lato client (nessun backend coinvolto).
// Le immagini esercizio vengono scaricate da GitHub al volo; se una
// immagine non è disponibile la scheda viene generata comunque senza di essa.
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

    let page = doc.addPage([595, 842]);
    let y = 842 - PAGE_MARGIN;

    const ensureSpace = (needed: number) => {
      if (y - needed < PAGE_MARGIN) {
        page = doc.addPage([595, 842]);
        y = 842 - PAGE_MARGIN;
      }
    };

    page.drawText(sheet.title, { x: PAGE_MARGIN, y, size: 18, font: fontBold, color: rgb(0.1, 0.1, 0.15) });
    y -= 22;
    page.drawText(`${client.first_name} ${client.last_name}`, { x: PAGE_MARGIN, y, size: 12, font, color: rgb(0.3, 0.3, 0.35) });
    y -= 28;

    for (const day of sheet.days) {
      ensureSpace(40);
      page.drawText(day.label, { x: PAGE_MARGIN, y, size: 14, font: fontBold, color: rgb(0.1, 0.1, 0.15) });
      y -= 20;

      for (const entry of day.exercises) {
        const exercise = exercisesById.get(entry.exerciseId);
        const rowHeight = IMAGE_SIZE + 10;
        ensureSpace(rowHeight);

        const images = exercise ? await this.embedFirstImage(doc, exercise) : null;
        if (images) {
          page.drawImage(images, { x: PAGE_MARGIN, y: y - IMAGE_SIZE, width: IMAGE_SIZE, height: IMAGE_SIZE });
        }

        const textX = PAGE_MARGIN + IMAGE_SIZE + 12;
        let textY = y - 12;
        const name = exercise ? exerciseDisplayName(exercise) : entry.exerciseId;
        textY = this.drawWrapped(page, name, textX, textY, fontBold, 11, 400);
        textY -= 4;
        page.drawText(`Serie: ${entry.sets}  Rip: ${entry.reps}  Recupero: ${entry.rest}`, {
          x: textX,
          y: textY,
          size: 10,
          font,
          color: rgb(0.3, 0.3, 0.35),
        });
        textY -= 14;
        if (entry.notes) {
          this.drawWrapped(page, entry.notes, textX, textY, font, 9, 380);
        }

        y -= rowHeight;
      }
      y -= 10;
    }

    return doc.save();
  }

  private drawWrapped(page: PDFPage, text: string, x: number, y: number, font: PDFFont, size: number, maxWidth: number): number {
    const words = text.split(' ');
    let line = '';
    let cursorY = y;
    for (const word of words) {
      const candidate = line ? `${line} ${word}` : word;
      if (font.widthOfTextAtSize(candidate, size) > maxWidth && line) {
        page.drawText(line, { x, y: cursorY, size, font, color: rgb(0.15, 0.15, 0.2) });
        cursorY -= size + 3;
        line = word;
      } else {
        line = candidate;
      }
    }
    if (line) {
      page.drawText(line, { x, y: cursorY, size, font, color: rgb(0.15, 0.15, 0.2) });
      cursorY -= size + 3;
    }
    return cursorY;
  }

  private async embedFirstImage(doc: PDFDocument, exercise: Exercise) {
    const path = exercise.images[0];
    if (!path) {
      return null;
    }
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
