var action = 'call';
function request(tabs) {
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