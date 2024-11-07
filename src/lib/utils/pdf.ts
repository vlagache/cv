export function downloadPDF() {
  const element = document.body;

  // Options pour la génération du PDF
  const options = {
    margin: 0, // Réduction de la marge pour minimiser les bordures blanches
    filename: "cv.pdf",
    image: { type: "jpeg", quality: 1.0 }, // Augmenter la qualité de l'image
    html2canvas: { scale: 5 }, // Augmenter l’échelle pour une meilleure résolution
    jsPDF: { unit: "mm", format: "a4", orientation: "portrait" }, // Utiliser le format A4 en millimètres
  };

  // Générer le PDF
  window.html2pdf().set(options).from(element).save();
}
