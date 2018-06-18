browser.contextMenus.create({
    id: "eat-page",
    title: "Съесть эту страницу"
});

function messageTab(tabs) {
    browser.tabs.sendMessage(tabs[0].id, {
        replacement: "Message from the extension!"
    });
}

browser.contextMenus.onClicked.addListener(function (info, tab) {
    if (info.menuItemId == "eat-page") {
        browser.tabs.executeScript({
            file: "page-eater.js"
        });

        var querying = browser.tabs.query({
            active: true,
            currentWindow: true
        });
        querying.then(messageTab);
    }
});