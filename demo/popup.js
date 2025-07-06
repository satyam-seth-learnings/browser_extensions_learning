document.getElementById("changeColor").addEventListener("click", () => {
  chrome.runtime.sendMessage({ command: "changeColor" });
});
