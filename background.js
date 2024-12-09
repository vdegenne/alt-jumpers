chrome.commands.onCommand.addListener((command) => {
  if (command === "github") {
    chrome.tabs.create({ url: "https://github.com/notifications" });
  } else if (command === "chatgpt") {
    chrome.tabs.create({ url: "https://chat.openai.com" });
  } else if (command === "extensions") {
    chrome.tabs.create({ url: "chrome://extensions/" });
  } else if (command === "youtube") {
    chrome.tabs.create({ url: "https://www.youtube.com/" });
  }
});
