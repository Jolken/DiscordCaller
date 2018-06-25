var action = 'modify';
function request(tabs) {
    console.log(tabs);
    browser.tabs.sendMessage(tabs[0].id, {
        'action': action
    });
}

browser.contextMenus.create({
    id: "discord-modify",
    title: "modify"
});
browser.contextMenus.create({
    id: "discord-call",
    title: "call"
});

browser.contextMenus.onClicked.addListener((target) => {
    switch (target.menuItemId) {
        case "discord-modify":
            action = "modify";
            break;
        case "discord-call":
            action = "call";
            break;
    }
});

browser.browserAction.onClicked.addListener((tab) => {
    browser.tabs.executeScript({
        file: './discord.js'
    });
    var querying = browser.tabs.query({
        active: true,
        currentWindow: true
    });
    querying.then(request);
});