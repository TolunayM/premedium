// let currentTab = window.location.href
// const prefix = "http://webcache.googleusercontent.com/search?q=cache:";


// chrome.action.onClicked.addListener(() => {
    
// })
// open(prefix + currentTab + '&sca_esv=582918052&strip=1&vwsrc=0')
// console.log("Current page URL: " + currentTab);

chrome.action.onClicked.addListener((tab) => {
  
    chrome.scripting.executeScript({
      target: {tabId: tab.id},
      files: ['content.js']
      
    });
  });