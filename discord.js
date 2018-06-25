var checkboxes = [];
function identifyRequest(request, sender, sendResponse){
    if (request.action == 'modify') {
        modify(getCheckboxesArea());
    }
    else if(request.action == 'call') {
        call(getCheckboxesArea());
    }
    browser.runtime.onMessage.removeListener(identifyRequest);
}

function getCheckboxesArea() {

    var checkboxes = [];
    let chats = document.querySelectorAll('.containerDefault-1ZnADq');
    chats.forEach((chat) => {
        if (chat.childNodes[0].childNodes[0].childNodes[0]) {
            if (chat.childNodes[0].childNodes[0].childNodes[0].innerHTML.includes('Voice')) {
                checkboxes.push(chat.childNodes[0].childNodes[0].childNodes[0]);
        }
        }
    });
    return checkboxes.filter(checkbox => checkbox);

}

function modify (checkboxesArea) {
    checkboxesArea.forEach((el) => {
        if (!el.innerHTML.includes('input')) {
            el.innerHTML += '<input type="checkbox">';
        }
    });
}

function call(checkboxesArea) {
    checkboxesArea.filter(checkboxArea => checkboxArea.childNodes[1].checked).forEach((element) => {element.click();}).forEach((element) => {element.click();});
}

browser.runtime.onMessage.addListener(identifyRequest)


