function checkUrl(url) {
  return url.match(/(www\.)?facebook.com\/?(\?sk=h_nor)?$/) && !url.match(/sk=h_chr/);
}

async function getCurrentTab() {
  let queryOptions = { active: true, currentWindow: true };
  let [tab] = await chrome.tabs.query(queryOptions);
  return tab;
}

chrome.tabs.onUpdated.addListener(async () => {
  var tab = await getCurrentTab();
  var url = tab.url;
  if (checkUrl(url)) {
    await chrome.tabs.update(tab.id, { url: 'https://www.facebook.com/?sk=h_chr' });
  }
})
