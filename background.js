//call or modify
var action = 'modify';

//sends action to script
function discord(tabs) {
    browser.tabs.sendMessage(tabs[0].id, {
        'action': action
    });
}

browser.contextMenus.create({
    id: "discord-modify",
    title: "Modify"
});
browser.contextMenus.create({
    id: "discord-call",
    title: "Call"
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
        file: 'scripts/discord.js'
    });
    var querying = browser.tabs.query({
        active: true,
        currentWindow: true
    });
    querying.then(discord);
});