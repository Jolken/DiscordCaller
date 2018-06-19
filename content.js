browser.browserAction.onClicked.addListener((tab) => {
    browser.tabs.executeScript({
        file: './modify.js'
    });
});