// TODO: background script
chrome.runtime.onInstalled.addListener(() => {
  // TODO: on installed function
});

// Picking up local storage that was "dropped off" by the content script

chrome.storage.local.get(["text"], (res) => {
  console.log(res);
});

// Receiving a message from the Content Script

chrome.runtime.onMessage.addListener((msg, sender, sendResponse) => {
  console.log(msg, sender, sendResponse);
  sendResponse("Received message from background.ts service worker");

  // Background Script Directly Messaging the Content Script with tabs.sendMessage -> in order to send message to ContentScripts, we have to use tabs. we do it inside this response because we are being sent the tabID from the contentScript and reading it in this listener. Can obviously create your own specific listener, but you could also use something like chrome.tabs.query to find any tabs with your targeted URL
  chrome.tabs.sendMessage(
    sender.tab.id,
    "Got your message using chrome.tabs.sendMessage from the background.ts service worker!"
  );
});

chrome.runtime.onInstalled.addListener((details) => {
  console.log(details);
});

const myTabs = chrome.tabs.query({
  currentWindow: true,
});

console.log("Background script running!");
console.log(myTabs, "My current tabs open, courtesy of the background script");
