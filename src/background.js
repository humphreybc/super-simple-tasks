// chrome.browserAction.onClicked.addListener(function(tab) {
//   console.log('hello')
// });

// // debugger

// var views = chrome.extension.getViews({ type: "popup" });

// if (views.length > 0){
//   chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
//     chrome.tabs.sendMessage(tabs[0].id, {action: "popup_open"}, function(response) {});  
//   });
// };