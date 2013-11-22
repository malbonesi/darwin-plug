API.on(API.CHAT, parseChat);
API.on(USER_JOIN, welcomeUser);

//Allow all managers and hosts to control Darwin? Or explicitly specify who can control in this file?

var malboFacts = [
    'Malbo is super hot.',
    'Malbo is vegan.',
    'Malbo is in an awesome band called Winning Monroe'
    ];

/*Functions for stuff*/

function rng(array) {
    return Math.floor(Math.random() * array.length);
}

//Check incoming chat messages and do stuff and things
function parseChat(data) {

    /*
    switch (data) {
        case data.message.match(/purr/ig):
            API.sendChat("Meow?");
    }
    */
    if (data.from.match(/AgLikeSilver/)){
        if (data.message.match(/-purr/)) {
            API.sendChat("Meow?");   
        }
    }
    
    if (data.message.match(/-malbofacts/)) {
    console.log("test");
            API.sendChat(malboFacts[rng(malboFacts)]);
            
        }
        
    
}

//Welcome users as they join the room \o/
function welcomeUser(user) {
    
    API.sendChat('Heya ' + user.username + '! Welcome to Indie Google+!');
}
