
// Function to initiate the download process
function downloadSectionAsImage() {
  // Get the section to capture
  const captureSection = document.getElementById("capture-section");

  // Use html2canvas to capture the section as an image
  html2canvas(captureSection).then(function (canvas) {
    // Convert canvas to image data URL
    const imageData = canvas.toDataURL("image/png");

    // Create a download link and trigger the download
    const downloadLink = document.createElement("a");
    downloadLink.download = "section_image.png";
    downloadLink.href = imageData;
    downloadLink.click();
  });
}

// Attach click event to the download button
const downloadBtn = document.getElementById("download-btn");
downloadBtn.addEventListener("click", downloadSectionAsImage);
