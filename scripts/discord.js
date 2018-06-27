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
        let area = chat.childNodes[0].childNodes[0].childNodes[0];//place where add checkbox 
        if (area) {
            if (area.innerHTML.includes('Voice')) {
                checkboxes.push(area);
        }
        }
    });
    return checkboxes.filter(checkbox => checkbox); //filter undefined

}
//adds checkboxes in voice chats
function modify(checkboxesArea) {
    checkboxesArea.forEach((area) => {
        if (!area.innerHTML.includes('input')) {
            area.innerHTML += '<input type="checkbox">';
        }
    });
}
//clicks twice on each checked checkbox
function call(checkboxesArea) {
    checkboxesArea.filter(checkboxArea => checkboxArea.childNodes[1].checked).forEach((element) => {element.click();}).forEach((element) => {element.click();});
}

browser.runtime.onMessage.addListener(identifyRequest)



