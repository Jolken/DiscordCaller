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
            checkboxes.push(chat.childNodes[0].childNodes[0].childNodes[0]);
        }
    });
    console.log(checkboxes);
}
browser.runtime.onMessage.addListener(identifyRequest)



