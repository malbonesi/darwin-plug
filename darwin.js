API.on(API.CHAT, parseChat);
API.on(USER_JOIN, welcomeUser);

//Allow all managers and hosts to control Darwin? Or explicitly specify who can control in this file?

/*Functions for stuff*/

//Check incoming chat messages and do stuff and things
function parseChat(data) {

    /*
    switch (data) {
        case data.message.match(/purr/ig):
            API.sendChat("Meow?");
    }
    */
    if (data.from.match(/AgLikeSilver/))
    if (data.message.match(/purr/ig)) {
        API.sendChat("Meow?");   
    }
}

//Welcome users as they join the room \o/
function welcomeUser(user) {
    
    API.sendChat('Heya ' + user.username + '! Welcome to Indie Google+!');
}
