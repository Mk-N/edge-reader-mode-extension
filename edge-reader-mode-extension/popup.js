document.addEventListener("DOMContentLoaded", function () {
  var toggleButton = document.getElementById("toggleReaderMode");

  toggleButton.addEventListener("click", function () {
    chrome.runtime.sendMessage({ action: "toggleReaderMode" });
  });
});
