
chrome.runtime.onInstalled.addListener(function() {
chrome.browserAction.onClicked.addListener(function(tab) {
	function spaghett(owo){
document.addEventListener('copy', function(e) {
	var lol = owo;
	  e.clipboardData.setData('text/plain', lol);
  e.preventDefault();
});
document.execCommand('copy');
	}
chrome.tabs.query({'active': true, 'lastFocusedWindow': true}, function (tabs) {
    var url = tabs[0].url;
 var s = url.replace(/[^0-9\s]/g,'');
 
  spaghett(s);
	});
});
});