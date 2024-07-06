chrome.storage.sync.get("readerModeEnabled", ({ readerModeEnabled }) => {
  if (readerModeEnabled) {
    // Your logic to enable reader mode here
    // Example: Modify DOM to activate reader mode
    // This is just a placeholder, actual implementation depends on the reader mode mechanism
    document.body.style.background = "#f5f5f5";
    document.body.style.color = "#333";
    document.body.style.fontFamily = "Arial, sans-serif";
  }
});
