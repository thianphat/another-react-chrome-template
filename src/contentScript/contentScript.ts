// TODO: content script
import "./contentScript.css";
import "./anotherScript";
import anotherScript from "./anotherScript";

console.log("Hi from the main content script");

const aTags = document.getElementsByTagName("a");
for (const tag of aTags) {
  tag.textContent = "Hello World";
}

anotherScript();

const text = [];

for (const tag of aTags) {
  text.push(tag.textContent);
}

// Setting local storage to be read by background script
chrome.storage.local.set({
  text,
});

// Sending a message to the Background script

chrome.runtime.sendMessage(null, text, (response) => {
  console.log("I'm from the contentScript: ", response);
});

// Receiving a message to the Background script

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  console.log(message);
  console.log(sender);
  // If we do the sendResponse function it will actually run in the background service worker and not the contentScript
});
