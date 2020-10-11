const userContainer = document.querySelector(".user-container");
const tooltipM = document.querySelector(".tooltip-container-m");
const tooltipD = document.querySelector(".tooltip-d");
const shareButton = document.querySelector(".share");
const tooltipMShareButton = document.querySelector(".share-tooltip");

tooltipM.className = "tooltip-container-m hidden";
tooltipD.className = "tooltip-d hidden";

window.addEventListener("keydown", function (event) {
  if (event.key === "Escape") {
    userContainer.className = "user-container";
    tooltipM.className = "tooltip-container-m hidden";
    tooltipD.className = "tooltip-d hidden";
  }
});

if (window.innerWidth < 1024) {
  shareButton.addEventListener("click", function () {
    userContainer.className = "user-container hidden";
    tooltipM.className = "tooltip-container-m";
  });
} else {
  shareButton.addEventListener("click", function () {
    tooltipD.className = "tooltip-d";
  });
}
