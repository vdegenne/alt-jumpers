chrome.commands.onCommand.addListener((command) => {
  if (command === "github") {
    chrome.tabs.create({ url: "https://github.com/vdegenne?tab=repositories" });
  } else if (command === "chatgpt") {
    chrome.tabs.create({ url: "https://chat.openai.com" });
  }
});
