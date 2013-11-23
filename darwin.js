API.on(API.CHAT, parseChat);
API.on(API.USER_JOIN, welcomeUser);

//Allow all managers and hosts to control Darwin? Or explicitly specify who can control in this file?

var malboFacts = [
    'Malbo is vegan.',
    'Malbo is in an awesome band called Winning Monroe.'
    ];

var facts = {
malbo: ['test1', 'test2'],
ag: ['ag1', 'ag2']
}
/*Functions for stuff*/

//RNG function for accessing array elements (to save code)
function rng(array) {
    return Math.floor(Math.random() * array.length);
}

//Check incoming chat messages and do stuff and things
function parseChat(data) {
if (data.message.match(/-testhash/)) { API.sendChat(facts.malbo[1]); }
    if (data.message.match(/-testhash2/)) { API.sendChat(facts.ag[0]); }
    /*
    switch (data.message) {
        case data.message.match(/purr/ig):
            API.sendChat("Meow?");
    }
    */
    if (data.from.match(/AgLikeSilver/)){
        if (data.message.match(/-purr/)) { API.sendChat("Meow?"); }
    }
    
    if (data.message.match(/-malbofacts/)) {
        var i = rng(malboFacts);
        API.sendChat(malboFacts[i]);
        //API.sendChat(malboFacts[rng(malboFacts)]); <-- wish I could do this :(           
    }
}

//Welcome users as they join the room \o/
function welcomeUser(user) {
    
    API.sendChat('Heya ' + user.username + '! Welcome to Indie Google+!');
}
