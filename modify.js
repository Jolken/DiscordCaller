var checkboxes = [];
function identifyRequest(request, sender, sendResponse){
    if (request.action == 'modify') {
        modify();
    }
    else if(request.action == 'call') {
        call();
    }
}

function modify () {
    var chats = document.querySelectorAll('.containerDefault-1ZnADq');
    chats.forEach((chat) => {
        if (!chat.childNodes[0].childNodes[0].childNodes[0].innerHTML.includes('<input type="checkbox">') & chat.childNodes[0].childNodes[0].childNodes[0].innerHTML.includes('Voice')){
            chat.childNodes[0].childNodes[0].childNodes[0].innerHTML += '<input type="checkbox">';
            checkboxes.push(chat.childNodes[0].childNodes[0].childNodes[0].childNodes[1]);
            checkboxes = checkboxes.filter(checkbox => checkbox);
        }
    });
    console.log(checkboxes);
}

function call() {
    console.log(checkboxes);
    let checked = checkboxes.filter(checkbox => checkbox.checked);
    console.log(checked);
    //checked.forEach((checkbox) => {
    //    checkbox.parentElement.click();
    //});
    
}

browser.runtime.onMessage.addListener(identifyRequest)



