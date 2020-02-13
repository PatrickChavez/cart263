"use strict";

/********************************************************************

Assignment 3
Patrick Chavez-Nadarajah

*********************************************************************/

$(document).ready(setup);

let correctAnimal;

let answers = [];

// Adding annyang commands
let sayGiveUp = {'I give up': giveUp};

let sayItAgain = {'Say it again': repeatName};

const NUM_OPTIONS = 4;

let animals = [
      "aardvark",
      "alligator",
      "alpaca",
      "antelope",
      "ape",
      "armadillo",
      "baboon",
      "badger",
      "bat",
      "bear",
      "beaver",
      "bison",
      "boar",
      "buffalo",
      "bull",
      "camel",
      "canary",
      "capybara",
      "cat",
      "chameleon",
      "cheetah",
      "chimpanzee",
      "chinchilla",
      "chipmunk",
      "cougar",
      "cow",
      "coyote",
      "crocodile",
      "crow",
      "deer",
      "dingo",
      "dog",
      "donkey",
      "dromedary",
      "elephant",
      "elk",
      "ewe",
      "ferret",
      "finch",
      "fish",
      "fox",
      "frog",
      "gazelle",
      "gila monster",
      "giraffe",
      "gnu",
      "goat",
      "gopher",
      "gorilla",
      "grizzly bear",
      "ground hog",
      "guinea pig",
      "hamster",
      "hedgehog",
      "hippopotamus",
      "hog",
      "horse",
      "hyena",
      "ibex",
      "iguana",
      "impala",
      "jackal",
      "jaguar",
      "kangaroo",
      "koala",
      "lamb",
      "lemur",
      "leopard",
      "lion",
      "lizard",
      "llama",
      "lynx",
      "mandrill",
      "marmoset",
      "mink",
      "mole",
      "mongoose",
      "monkey",
      "moose",
      "mountain goat",
      "mouse",
      "mule",
      "muskrat",
      "mustang",
      "mynah bird",
      "newt",
      "ocelot",
      "opossum",
      "orangutan",
      "oryx",
      "otter",
      "ox",
      "panda",
      "panther",
      "parakeet",
      "parrot",
      "pig",
      "platypus",
      "polar bear",
      "porcupine",
      "porpoise",
      "prairie dog",
      "puma",
      "rabbit",
      "raccoon",
      "ram",
      "rat",
      "reindeer",
      "reptile",
      "rhinoceros",
      "salamander",
      "seal",
      "sheep",
      "shrew",
      "silver fox",
      "skunk",
      "sloth",
      "snake",
      "squirrel",
      "tapir",
      "tiger",
      "toad",
      "turtle",
      "walrus",
      "warthog",
      "weasel",
      "whale",
      "wildcat",
      "wolf",
      "wolverine",
      "wombat",
      "woodchuck",
      "yak",
      "zebra"
    ];

// setup()
//
// Fires off a new round and activates voice commands
function setup() {
newRound();

// Activating annyang
if (annyang) {
  // Let's define our first command. First the text we expect, and then the function it should call


  // Add our commands to annyang
  annyang.addCommands(sayGiveUp);
  annyang.addCommands(sayItAgain);

  // Start listening. You can call this here, or attach this call to an event, button, etc.
  annyang.start();
}
}

function addButton(label) {
  let $div = $('<div></div>');
  $div.addClass('guess');
  $div.text(label);
  $div.button();
  $div.appendTo('body');
  $div.on('click', handleGuess);
}

function handleGuess() {
  console.log($(this).text(), correctAnimal);
  if ($(this).text() === correctAnimal) {
    $('.guess').remove();
    setTimeout(newRound, 1000);
  }
  else {
    $(this).effect('shake');
    sayBackwards(correctAnimal);
  }
}

function newRound() {
  answers = [];
  for (let i = 0; i < NUM_OPTIONS; i++) {
    let answer = animals[Math.floor(Math.random() * animals.length)];
    addButton(answer);
    answers.push(answer);
  }
  correctAnimal = answers[Math.floor(Math.random() * answers.length)];
  sayBackwards(correctAnimal);
}

function sayBackwards(text) {
  let backwardsText = text.split('').reverse().join('');
  let options = {
    rate: Math.random(),
    pitch: Math.random()
  }
  responsiveVoice.speak(backwardsText, "US English Male", options);
}

// giveUp()
//
// Calls the giveAnswer() function when the user asks for it
function giveUp() {
  // Adding a console.log to make sure the voice command works
  console.log("Don't give up!")
  // Making the correct answer reveal itself by checking the <div>
  let $div = $('div');
  $div.each(giveAnswer);
}

// giveAnswer()
//
// Highlights the correct answer and starts the game anew
function giveAnswer() {
  // console.log($(this).effect('shake'));
  if ($(this).text() === correctAnimal) {
    // The answer will shake
    $(this).effect('shake');
    // The guess class is removed after half a second
    setTimeout(removeGuess, 500);
    // A new round starts after a second
    setTimeout(newRound, 1000);
  }
}

// removeGuess()
//
// Removes the guess class when called for a round reset
function removeGuess() {
  // The guess class will be removed
  $('.guess').remove();
}

// repeatName()
//
// Makes the responsiveVoice say the correct answer again
// in a different rate and pitch
function repeatName() {
  console.log("Repeated!");
  sayBackwards(correctAnimal);
}
