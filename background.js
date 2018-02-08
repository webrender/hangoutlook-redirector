chrome.storage.sync.get(["path","url"], function(items) {
    chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
        if (changeInfo.url) {
            if (changeInfo.url.substr(changeInfo.url.length - 1) == '/') {
                changeInfo.url = changeInfo.url.substr(0, changeInfo.url.length - 1);
            }
            var l = document.createElement("a");
            l.href = changeInfo.url;
            if (l.pathname == items.path) {
                chrome.tabs.update(tabId, {url: items.url});
            }
        }
    });
});
