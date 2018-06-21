var action = 'modify';
function request(tabs) {
    console.log(tabs);
    browser.tabs.sendMessage(tabs[0].id, {
        'action': action
    });
}

browser.browserAction.onClicked.addListener((tab) => {
    browser.tabs.executeScript({
        file: './modify.js'
    });
    var querying = browser.tabs.query({
        active: true,
        currentWindow: true
    });
    querying.then(request);
});
browser.runtime.onMessage.addListener((message, sender, sendResponse) => {
    console.log(message);
});