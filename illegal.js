//Dealers
resources   = [
	{ name: "luxury_cars" , dealer: "the_car_thief"     , buyer: "the_african_president"      } ,
	{ name: "guns"        , dealer: "the_arms_dealer"   , buyer: "the_general_gerillero"      } ,
	{ name: "jewelry"     , dealer: "the_jewelry_thief" , buyer: "the_swiss_banker"           } ,
	{ name: "alcohol"     , dealer: "the_alcohol_dealer", buyer: "the_hollywood_star"         } ,
	{ name: "pornography" , dealer: "the_porn_publisher", buyer: "the_obsessed_porn_collector"} ,
	{ name: "secret_files", dealer: "the_hacker"        , buyer: "the_cia_director"           } ,
	{ name: "call_girls"   , dealer: "the_pimp"          , buyer: "the_rich_emir"              } ,
	{ name: "powder"      , dealer: "the_powder_dealer" , buyer: "the_rock_star"              } ,
];

var decks;
var shuffled;

function shuffle(array) {
	var currentIndex = array.length, temporaryValue, randomIndex ;

	while (0 !== currentIndex) {

		// Pick a remaining element...
		randomIndex = Math.floor(Math.random() * currentIndex);
		currentIndex -= 1;

		// And swap it with the current element.
		temporaryValue = array[currentIndex];
		array[currentIndex] = array[randomIndex];
		array[randomIndex] = temporaryValue;
	}

	return array;
}

function prepare(players)
{
	if(players < 4)
		players = 4;

	if(players > resources.length)
		players = resources.length

	_decks = [];

	for(i=0;i<players-1;i++){
		var deck = {}
		deck["dealer"] 	 = shuffled[i]["dealer"];
		deck["resource"] = shuffled[i]["name"];
		deck["buyer"]  	 = shuffled[i+1]["buyer"];
		_decks.push(deck);
	}
	_decks.push({ dealer: shuffled[players - 1]["dealer"], resource: shuffled[players - 1]["name"], buyer: shuffled[0]["buyer"] });

	for(i=0;i<players-1;i++){
		_decks[i+1]["extra"] = _decks[i]["resource"];
	}
	_decks[0]["extra"] = _decks[players-1]["resource"];

	return _decks;
}

function add_player()
{
	if(decks.length < resources.length)
	{
		decks = prepare(decks.length + 1);	
		return true;
	}
	return false;
}

function remove_player()
{
	if(decks.length > 4)
	{
		decks = prepare(decks.length - 1);	
		return true;
	}
	return false;
}

function new_game(players)
{
	var players = players || 4;
	shuffled = shuffle(resources);
	decks = prepare(players);
}

function log(){
for(deck in decks){
	console.log(decks[deck]);
}
console.log("\r\n");
}

new_game()
log()
add_player();
log();
add_player();
log();
add_player();
log();
