// script.js
const fullscreenButton = document.getElementById("fullscreenButton");

fullscreenButton.addEventListener("click", () => {
  if (document.fullscreenElement) {
    document.exitFullscreen().catch((err) => {
      console.error(`Error exiting fullscreen mode: ${err.message}`);
    });
  } else {
    document.documentElement.requestFullscreen().catch((err) => {
      console.error(`Error entering fullscreen mode: ${err.message}`);
    });
  }
});

// Detect and handle changes to fullscreen mode
document.addEventListener("fullscreenchange", () => {
  if (document.fullscreenElement) {
    // We are in fullscreen mode
    // You can add any additional logic here
  } else {
    // We exited fullscreen mode
    // You can add any additional logic here
  }
});

// Catches arrow key events to avoid scrolling the browser page
window.addEventListener(
  "keydown",
  function (e) {
    if ([32, 37, 38, 39, 40].indexOf(e.keyCode) > -1) {
      e.preventDefault();
    }
  },
  false
);
