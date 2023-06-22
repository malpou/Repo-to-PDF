import PDFDocument from "pdfkit"

export default function addToC(doc: typeof PDFDocument, filePaths: Map<string, number>) {
  doc.addPage();

  doc.fontSize(16)
     .text("Table of Contents", {
       align: "center",
       underline: true
     });

  let y = doc.y + 20;

  doc.fontSize(12);

  for (let [filePath, pageNumber] of filePaths) {
    doc.text(filePath, 50, y); 
    doc.text(String(pageNumber), {align: 'right'}); 
    y += 20;
  }
}
