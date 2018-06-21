function identifyRequest(request, sender, sendResponse){
    if (request.action == 'modify') {
        modify(getCheckboxesArea());
    }
    else if(request.action == 'call') {
        call(getCheckboxesArea());
    }
}

function getCheckboxesArea() {
    var checkboxes = [];
    let chats = document.querySelectorAll('.containerDefault-1ZnADq');
    chats.forEach((chat) => {
        if (chat.childNodes[0].childNodes[0].childNodes[0].innerHTML.includes('Voice')) {
            checkboxes.push(chat.childNodes[0].childNodes[0].childNodes[0].childNodes[1]);
        }
    });
    console.log(chats);
    return checkboxes.filter(checkbox => checkbox)
}

function modify (checkboxesArea) {
    checkboxesArea.forEach((el) => {
        el.innerHTML += '<input type="checkbox">';
    });
}

function call(checkboxesArea) {
    checkboxesArea.filter(checkbox => checkbox.checked);
}

browser.runtime.onMessage.addListener(identifyRequest)



