let activeTabId, lastUrl, lastTitle;
function getTabInfo(tabId) {
  chrome.tabs.get(tabId, function(tab) {
    if(lastUrl != tab.url){
      if (tab.url.includes("youtube.com/shorts")){
        chrome.tabs.update(tab.id, { url: lastUrl })      
      }  
      lastUrl = tab.url
    }
  })
}

chrome.tabs.onActivated.addListener(function(activeInfo) {
  getTabInfo(activeTabId = activeInfo.tabId)
})

chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
  if(activeTabId == tabId) {
    getTabInfo(tabId)
  }
})