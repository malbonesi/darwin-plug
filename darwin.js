/*
Things to do:
1. Cap waitlist at 10
2. Monitor afk status for DJs
3. 
*/
API.on(API.CHAT, parseChat);
API.on(API.USER_JOIN, welcomeUser);

//Hash of facts
var facts = {
malbo: [
        'Malbo is vegan.', 
        'Malbo is in an awesome band called Winning Monroe.',
        'Malbo is my true owner'
       ],
ag:    [
        'ag1', 
        'ag2'
       ],
cat:   [
        'I\'m named after Darwin Deez!', 
	    'Meow!',
	    'I really like tuna',
	    'Catnip makes me sneeze. Just say no!',
	    'I\'m a Russian Blue American Shorthair mix!',
	    'I was adopted at a shelter - shelter cats rule!',
	    'I\'m neutered! I don\'t know what that means, but that\'s what they told me when I woke up with a tattoo on my belly. \/whatever',
	    'The Russian Blue is a naturally occurring breed that may have originated in the port of Arkhangelsk, Russia.',
	    'Russian Blues are sometimes called Archangel Blues because it\'s believed that sailors took the cats from the Archangel Isles to England and Northern Europe in the 1860s.',
	    'I am the softest kitty! My fur is known as a double coat, with a downy undercoat that\'s equal in length to the guard hairs, which are an even blue with silver tips. Only Russian Blues and the French Chartreux have this type of coat.',
	    'I\'m really smart! Many Russian Blues have been trained to do tricks. We are a very intelligent breed.', 
	    'I\'m a really great friend! Russian Blues have been known to play fetch, and are sensitive to human emotions.',
	    'The Russian Blue is an intelligent, curious, and tranquil animal. We are known for our friendliness, but are shy with strangers.', 
	    'I usually can be quiet, only meowing occasionally, but I can also be very talkative. I\'m really loud when I want my food!!',
	    'I spend about 90% of my awake time cleaning myself.', 
	    'I am normally reserved around strangers which is why I prefer to meet and talk to new people through a computer.',
	    'Anecdotal evidence suggests that the Russian Blue may be better tolerated by friendbeasts with mild to moderate allergies. There is speculation that we produces less glycoprotein Fel d 1, one source of cat allergies. My thicker coat may also trap more of the allergens closer to my skin.'
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

if (msg.match(/^-/) && msg.match(/facts/)) { //will probably want to separate out the '-' for easter eggs

    var person = msg.substr(1, msg.length-6); //take the string between the '-' and 'facts'
    
    if(facts.hasOwnProperty(person)){
        var i = rng(facts[person]);
        API.sendChat(facts[person][i]); //API.sendChat(malboFacts[rng(malboFacts)]); <-- wish I could use rng in this way :(
    }
    else {
        API.sendChat('Sorry, I have no facts for ' + person + ' :(');
    }
    
}
    if (data.from.match(/AgLikeSilver/)){
        if (msg.match(/-purr/)) { API.sendChat("Meow?"); }
    }           

}

//Welcome users as they join the room \o/
function welcomeUser(user) {
    
    API.sendChat('Heya ' + user.username + '! Welcome to Indie Google+!');
}
