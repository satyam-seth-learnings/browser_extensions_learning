chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.command === "changeColor") {
    document.body.style.backgroundColor = "lightblue";
  }
});
