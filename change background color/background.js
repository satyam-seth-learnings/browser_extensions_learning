chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.command === "changeColor") {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      chrome.scripting.executeScript({
        target: { tabId: tabs[0].id },
        function: () => {
          document.body.style.backgroundColor = "lightblue";
        }
      });
    });
  }
});
