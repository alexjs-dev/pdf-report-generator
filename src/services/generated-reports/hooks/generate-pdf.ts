import { HookContext } from '@feathersjs/feathers';
import fs from 'fs';
import path from 'path';
import PDFDocument from 'pdfkit';
import { drawChart } from '../../../util/charts/draw-chart';
import { CHART_IMAGE_DIMENSIONS } from '../../../consts';

const root_dir = path.resolve(__dirname, '../../../../');
const save_dir = `${root_dir}/public`;

export const generatePdfReport = async (ctx: HookContext) => {
  // Create a document
  const { fileId, currencyCode } = ctx.result;
  const doc = new PDFDocument();
  doc
    .fontSize(27)
    .text(
      `Generated report: ${fileId} - ${new Date().toISOString()}`,
      100,
      100
    );
  doc.fontSize(10).text(`Currency: ${currencyCode}`, 100, 180);
  const image = await drawChart({ imageDimensions: CHART_IMAGE_DIMENSIONS });
  doc.image(image, 100, 220, { ...CHART_IMAGE_DIMENSIONS });
  doc.pipe(fs.createWriteStream(`${save_dir}/${fileId}.pdf`));
  doc.end();

  return ctx;
};
