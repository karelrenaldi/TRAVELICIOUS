const screenshotBtn = document.querySelector(".screenshot");

screenshotBtn.addEventListener("click", (e) => {
  const haveItems = items.length; // will false if items.length === 0
  haveItems ? screenshot().catch(err => console.log(err)) : console.log("Gaada");
});

async function screenshot() {
  const canvas = await html2canvas(list); // will await until return resolve value => canvas
  const link = document.createElement("a");
  document.body.appendChild(link);
  link.href = canvas.toDataURL("image/png"); // Make canvas to png file
  link.download = "canvas-image.png"; // Download name
  link.click(); // auto download
  document.body.removeChild(link); // remove anchor
}