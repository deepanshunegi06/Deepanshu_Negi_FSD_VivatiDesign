// 🔒 Disable Right-Click
document.addEventListener("contextmenu", (event) => event.preventDefault());

// 🔒 Disable DevTools Keyboard Shortcuts
document.onkeydown = function (e) {
  if (
    e.key === "F12" ||
    (e.ctrlKey && e.shiftKey && ["I", "J", "C"].includes(e.key)) ||
    (e.ctrlKey && e.key === "U")
  ) {
    e.preventDefault();
    return false;
  }
};

// 🔒 DevTools Detection with Redirect
(function devToolsDetectRedirect() {
  let checkStatus = () => {
    const start = performance.now();
    debugger;
    const end = performance.now();

    if (end - start > 100) {
      // Detected DevTools
      window.location.href = "https://google.com"; // Or show alert
    }
  };

  setInterval(checkStatus, 1000);
})();
