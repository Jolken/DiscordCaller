var checkboxes = [];
function identifyRequest(request, sender, sendResponse){
    if (request.action == 'modify') {
        modify();
    }
    else if(request.action == 'call') {
        call(5);
    }
}

function modify () {
    var chats = document.querySelectorAll('.containerDefault-1ZnADq');
    chats.forEach((chat) => {
        if (!chat.childNodes[0].childNodes[0].childNodes[0].innerHTML.includes('<input type="checkbox">') & chat.childNodes[0].childNodes[0].childNodes[0].innerHTML.includes('Voice')){
            chat.childNodes[0].childNodes[0].childNodes[0].innerHTML += '<input type="checkbox">';
            checkboxes.push(chat.childNodes[0].childNodes[0].childNodes[0].childNodes[1]);
            checkboxes.filter(checkbox => checkbox);
        }
    });
    console.log(checkboxes);
}

function call(times) {
    checkboxes.filter(checkbox => checkbox.checked);
    for (let i = 1; i >= times; i++) {
        checkboxes.forEach((checkbox) => {
            checkbox.click();
        });
    }
}

browser.runtime.onMessage.addListener(identifyRequest)



