API.on(API.CHAT, parseChat);

//Check incoming chat messages and do stuff and things
function parseChat(data) {

    /*
    switch (data) {
        case data.message.match(/purr/ig):
            API.sendChat("Meow?");
    }
    */
    
    if (data.message.match(/purr/ig)) {
        API.sendChat("Meow?");   
    }
}
