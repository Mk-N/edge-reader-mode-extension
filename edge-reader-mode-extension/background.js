chrome.runtime.onInstalled.addListener(() => {
  chrome.storage.sync.set({ readerModeEnabled: true });
});

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.action === "toggleReaderMode") {
    chrome.storage.sync.get("readerModeEnabled", ({ readerModeEnabled }) => {
      chrome.storage.sync.set({ readerModeEnabled: !readerModeEnabled });
    });
  }
});
