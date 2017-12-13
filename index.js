const app = "I don't do much.";

kittens = ["Milo", "Otis", "Garfield"]; //global, is this way to reset?

//appends a kitten to the end of the kittens array
function destructivelyAppendKitten(name){
kittens.push(name);  
}

//ralph
function destructivelyPrependKitten(name){
kittens.unshift(name);  
} 

//expects ["Milo", "Otis"]
function destructivelyRemoveLastKitten()
{kittens.pop()}

//expects ["Otis", "Garfield"]
function destructivelyRemoveFirstKitten()
{kittens.shift()}

function appendKitten(name){
return [...kittens,name];
}

function prependKitten()
