/*
This is a framework for the bot used in Indie Google+.  
Feel free to use all, or some, of this code for your own plug.dj bot.

Things to do:
1. Cap waitlist at 10 - Sufficient
2. Monitor afk status for DJs
3. Add a help function for users to see which commands are available
4. GUI stuff
*/

API.on(API.CHAT, parseChat);
API.on(API.USER_JOIN, welcomeUser);
API.on(API.WAIT_LIST_UPDATE, capWaitList);

var ROOMNAME = 'myroom'; //for welcoming users
var WAITCAP = 10;
var GREET = false;
var FACTS = false;

//Hash of facts
//Add new users here to include them in the fact list.
var facts = {
malbo: [
        'fact1',
        'fact2'
       ],
ag:    [
        'fact1', 
        'fact2'
       ]
}

/*Functions for stuff*/

//RNG function for accessing array elements (to save code)
function rng(array) {
    return Math.floor(Math.random() * array.length);
}

//Check incoming chat messages and do stuff and things
function parseChat(data) {

    var msg = data.message; //Just to lessen code
    
    //Amanda's commands
    if (data.from == "malbo"){
        switch (msg) {
        case "!greetoff":
            API.sendChat('Turning greet off');
            break;
        }
        
        /*
        if (msg == "!greetoff") { GREET = false; }
        if (msg == "!greeton") { GREET = true; } 
        */
    } 

    if (msg.match(/^-.*facts$/)) { //will probably want to separate out the '-' matching for non-commands
    
        if (!FACTS) return;

        var person = msg.substr(1, msg.length-6); //take the string between the '-' and 'facts'
    
        //If the person exists, grab a fact from the array
        if(facts.hasOwnProperty(person)){
            var i = rng(facts[person]);
            API.sendChat(facts[person][i]); //API.sendChat(facts[person][rng(facts[person])]); <-- does this work?
        }
        else {
            API.sendChat('Sorry, I have no facts for ' + person + ' :(');
        }
    }        
}

//Welcome users as they join the room \o/
function welcomeUser(user) {
    
    if (!GREET) return;
    API.sendChat('Heya ' + user.username + '! Welcome to ' + ROOMNAME + '!');
}

//Cap the waitlist based on WAITCAP
//This could probably be improved to take users off the list if it's already above WAITCAP
//So at the moment, it works assuming that the list is already below the cap
function capWaitList(djs) {

    if (djs.length < WAITCAP) { API.moderateLockWaitList(false,false) }//unlock
    else { API.moderateLockWaitList(true,false) }//lock
    
}
