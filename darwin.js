API.on(API.CHAT, parseChat);

//Check incoming chat messages and do stuff and things
function parseChat(data) {

    switch (data.message) {
        case data.message.match(/test/):
            API.sendChat("Meow?");
    }

}
