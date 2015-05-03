function onClickHandler(info, tab) {
  chrome.extension.sendMessage(info.selectionText, function(){});
}

chrome.contextMenus.onClicked.addListener(onClickHandler);

chrome.runtime.onInstalled.addListener(function() {

  chrome.contextMenus.create({"title": "Add: %s", "contexts":["selection"]});

});