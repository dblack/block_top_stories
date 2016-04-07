function checkUrl(url) {
	return url.match(/www.facebook.com\/?(\?sk=h_nor)?$/) &&! url.match(/sk=h_chr/);
}

chrome.tabs.onUpdated.addListener(function (tabID, changeInfo, tab) {
	if (changeInfo.status == 'complete') {
		if (checkUrl(tab.url)) {
			chrome.tabs.update(tab.id, { url: 'https://www.facebook.com/?sk=h_chr' });
		}
	}
});
