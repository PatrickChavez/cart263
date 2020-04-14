"use strict";

/********************************************************************

From Me To You
Patrick Chavez-Nadarajah

Gather hints around your room in order to craft a potion that can turn your mermaid
friend into a human! Examine objects and figure out their hidden meanings in order to
know the ingredients you need.

*Credits*

Scroll Class based on Pippin Barr's Predator-Prey Simulation
https://github.com/pippinbarr/cart253-2019/blob/master/games/game-oop-predator-prey.zip

Canvas position based on p5 reference
https://p5js.org/reference/#/p5.Element/position

Wheel object based on p5 reference
https://p5js.org/reference/#/p5/atan2

Scroll Text from Lorem Ipsum
https://www.lipsum.com/

******************************
Music

Hinokageri/Shade of the Sun/日の陰り
Amacha Music Studio
https://amachamusic.chagasi.com/genre_piano3.html

Hisame/Ice Rain/氷雨
Amacha Music Studio
https://amachamusic.chagasi.com/genre_piano4.html

Harunoyokan/Premonition of Spring/春の予感
Amacha Music Studio
https://amachamusic.chagasi.com/genre_easylistening2.html

Shinkaigyonoyuuei/Deep-Sea Fish Swimming/深海魚の遊泳
Amacha Music Studio
https://amachamusic.chagasi.com/image_ayashii.html

Torinouta/Song of Birds/鳥の歌
Amacha Music Studio
https://amachamusic.chagasi.com/image_shimijimi7.html

System 46/システム46 (Sound Effect)
Maou Damashii
https://maoudamashii.jokersounds.com/list/se6.html

One Point 23/ワンポイント23 (Sound Effect)
Maou Damashii
https://maoudamashii.jokersounds.com/list/se2.html
******************************

******************************
Fonts

Caviar Dreams font by Lauren Thompson
https://www.dafont.com/caviar-dreams.font?l[]=10&l[]=1
http://www.nymfont.com/

Naomis Hand font by Naomi D.
https://www.dafont.com/naomis-hand.font?l[]=10&l[]=1

04b_30 font by 04
https://www.dafont.com/04b-30.font
http://www.04.jp.org/
******************************

*********************************************************************/

// Preparing a function that will start when the webpage has loaded
$(document).ready(setupDocument);

// Creating variables for the many game states
let currentState;
let titleState;
let hubState;
let scrollState;
let scrollStory;
let wheelState;
let wheelStory;
let paperState;
let paperStateCounter = 0; // Variable to determine what image is shown on the canvas
let paperStory;
let experimentState;
let normalEnding;
let goodEnding;

// Adding variables for item objects
let scrollObject;
let wheelObject;

// Adding variables for the state images
let hubImage;
let experimentImage;
let storyImagePlaceholder;
let scrollBackground;
let wheelBackground;

// Adding variables for the object images
let wheelImage;
let scrollImage;
let paperImageNormal;
let paperImageBad;
let paperImageGood;

// Making an array for the story images and their number
// The intro
let introImages = [];
let introNumber = 10;
// The scroll
let scrollStoryImages = [];
let scrollStoryNumber = 14;
// The wheel
let wheelStoryImages = [];
let wheelStoryNumber = 16;
// The paper
let paperStoryImages = [];
let paperStoryNumber = 18;
// The normal ending
let normalEndStoryImages = [];
let normalEndStoryNumber = 15;
// The good ending
let goodEndStoryImages = [];
let goodEndStoryNumber = 11;

// JSON Variable
let gameScript;

// Adding variables for the music and sound effects
let currentMusic; // Variable used for pausing the current music and calling another song
let titleMusic = new Audio("assets/sounds/shinkaigyonoyuuei.mp3");
let hubMusic = new Audio("assets/sounds/harunoyokan.mp3");
let storyMusic = new Audio("assets/sounds/hinokageri.mp3");
let normalEndingMusic = new Audio("assets/sounds/hisame.mp3");
let goodEndingMusic = new Audio("assets/sounds/torinouta.mp3");
let positiveSFX = new Audio("assets/sounds/se_maoudamashii_system46.wav");
let dialogSFX = new Audio("assets/sounds/se_maoudamashii_onepoint23.wav");

// Creating an array for the text parser answers
let parserAnswers = ["anemone", "872"];

// setupDocument()
//
// Calls functions once the webpage has loaded
function setupDocument() {
  // Displaying the in-game menu
  $("#menu").menu();
  // Showing the dialog box when the "experiment" option is chosen
  $('#experiment').on('click', showDialog);
  // The state changes when a menu option is chosen
  $('#scroll-look').on('click', clickScrollState);
  $('#scroll-think').on('click', clickScrollStory);
  $('#wheel-look').on('click', clickWheelState);
  $('#wheel-think').on('click', clickWheelStory);
  $('#paper-look').on('click', clickPaperState);
  $('#paper-think').on('click', clickPaperStory);
  $('#room').on('click', clickHubState);
  // The music plays upon startup
  stateMusic();
  // Loading the .json file
  $.getJSON("data/mermaid_game_script.json")
    // Call the dataLoaded() function if the loading succeeds
    .done(gameScriptLoaded)
    // Call the dataNotLoaded() function if the loading fails
    .fail(gameScriptNotLoaded);
}

// gameScriptdataLoaded()
//
// Loads the .json file into a variable
function gameScriptLoaded(data) {
  // File loaded into variable
  gameScript = data;
}

// gameScriptdataNotLoaded()
//
// Gives a console.error if the data is not loaded
function gameScriptNotLoaded(request, text, error) {
  console.error(error);
}

// showDialog
//
// Shows a dialog box asking the player if they are ready to experiment
function showDialog() {
  // Making a dialog window that slowly fades in
  $('#dialog').fadeIn("slow").dialog({
    // Adding options with anonymous functions
    buttons: {
      "Yes": function() {
        // The experiment state is called
        clickExperimentState();
        // The current dialog closes
        $(this).dialog('close');
      },
      "No": function() {
        // The current dialog closes
        $(this).dialog('close');
      }
    }
  });
  // A sound effect plays
  dialogSFX.play();
}

// menuStateChange
//
// A series of functions that call a particular state and change music as well as text
// The hub state
function clickHubState() {
  currentState = hubState;
  // The music changes
  stateMusic();
  // The text changes
  stateText();
}
// The scroll state
function clickScrollState() {
  currentState = scrollState;
  // Resets the scroll's position
  scrollObject = new Scroll(1000, 175, scrollImage);
  // The text changes
  stateText();
}
// The scroll story sequence
function clickScrollStory() {
  currentState = scrollStory;
  stateMusic();
  // The menu disappears
  $("#menu").css("opacity", 0);
}
// The wheel state
function clickWheelState() {
  currentState = wheelState;
  // The text changes
  stateText();
}
// The wheel story sequence
function clickWheelStory() {
  currentState = wheelStory;
  stateMusic();
  // The menu disappears
  $("#menu").css("opacity", 0);
}
// The paper state
function clickPaperState() {
  currentState = paperState;
  // Calling textParser()
  textParser();
  $('#submit-button').on("click", checkAnswerPaper);
}
// The paper story sequence
function clickPaperStory() {
  currentState = paperStory;
  stateMusic();
  // The menu disappears
  $("#menu").css("opacity", 0);
}
// The experiment state
function clickExperimentState() {
  currentState = experimentState;
  // Calling textParser()
  textParser();
  $('#submit-button').on("click", checkAnswerExperiment);
}

// stateMusic
//
// The music changes depending on the state
function stateMusic() {
  // Title state
  if (currentState === titleState) {
    // Setting up how the music plays
    titleMusic.loop = true;
    titleMusic.currentTime = 0;
    titleMusic.play();
    // Putting the song as the current music
    currentMusic = titleMusic;
  }
  // Hub state
  else if (currentState === hubState) {
    // Pausing the current music
    currentMusic.pause();
    // Setting up how the music plays
    hubMusic.loop = true;
    hubMusic.currentTime = 0;
    hubMusic.play();
    // Putting the song as the current music
    currentMusic = hubMusic;
  }
  // The item story states
  else if (currentState === scrollStory || currentState === wheelStory || currentState === paperStory) {
    // Pausing the current music
    currentMusic.pause();
    // Setting up how the music plays
    storyMusic.loop = true;
    storyMusic.currentTime = 0;
    storyMusic.play();
    // Putting the song as the current music
    currentMusic = storyMusic;
  }
  // Normal ending
  else if (currentState === normalEnding) {
    // Pausing the current music
    currentMusic.pause();
    // Setting up how the music plays
    normalEndingMusic.loop = true;
    normalEndingMusic.currentTime = 0;
    normalEndingMusic.play();
    // Putting the song as the current music
    currentMusic = normalEndingMusic;
  }
  // Good ending
  else if (currentState === goodEnding) {
    // Pausing the current music
    currentMusic.pause();
    // Setting up how the music plays
    goodEndingMusic.loop = true;
    goodEndingMusic.currentTime = 0;
    goodEndingMusic.play();
    // Putting the song as the current music
    currentMusic = goodEndingMusic;
  }
}

// stateText()
//
// Changes the current text of the textbox based on the state
function stateText() {
  // Hub state
  if (currentState === hubState) {
    $('#textbox').text("Click an action on the menu!");
  }
  // Scroll state
  else if (currentState === scrollState) {
    $('#textbox').text("Use the left and right arrow keys to move the scroll!");
  }
  // Wheel state
  else if (currentState === wheelState) {
    $('#textbox').text("Use the mouse to rotate the wheel!");
  }
}

// textParser()
//
// Makes it so that the user can type into the textbox
function textParser() {
  // Making a variable for the parser
  let parser = $('<div id="text-parser" contenteditable></div>');
  // Adding the text parser into the textbox
  $('#textbox').html(parser);
  // Creating a variable for the div
  let buttonDiv = $('<div></div>');
  // Creating a button for the div
  buttonDiv.append('<button id="submit-button" type="button">Submit</button>');
  // Adding the button to the textbox
  $('#textbox').append(buttonDiv);
}

// checkAnswerPaper()
//
// Compliment to textParser() that makes the submit button process what the user typed
function checkAnswerPaper() {
  // Making the parser text into a variable that always turns into lowercase
  let answer = $('#text-parser').text().toLowerCase();
  // If the answer is correct, then the counter increases and the image changes
  if (answer === parserAnswers[0]) {
    paperStateCounter = 2;
    // A sound effect plays
    positiveSFX.play();
  }
  // If the answer is wrong, the counter also increases and the image also changes
  else {
    paperStateCounter = 1;
  }
}

// checkAnswerExperiment()
//
// Another compliment to textParser() that makes the submit button process what the user typed
function checkAnswerExperiment() {
  // Making the parser text into a variable
  let answer = $('#text-parser').text();
  // If the answer is correct, then the good ending is called
  if (answer === parserAnswers[1]) {
    // The state changes
    currentState = goodEnding;
    // Music and a sound effect plays
    positiveSFX.play();
    stateMusic();
    // The menu disappears
    $("#menu").css("opacity", 0);
  }
  // If the answer is wrong, then the normal ending is called
  else {
    // The state changes
    currentState = normalEnding;
    // Music plays
    stateMusic();
    // The menu disappears
    $("#menu").css("opacity", 0);
  }
}

// preload()
//
// p5 function that loads files before the program starts
function preload() {
  // Loading variables for the scene images
  hubImage = loadImage("assets/images/HubRoom.png");
  experimentImage = loadImage("assets/images/ExperimentImage.png");
  storyImagePlaceholder = loadImage("assets/images/StoryPlaceholder.png");
  scrollBackground = loadImage("assets/images/ScrollBG.png");
  wheelBackground = loadImage("assets/images/WheelBG.png");
  // Loading variables for the item images
  // The main items in their states
  scrollImage = loadImage("assets/images/Scroll.png");
  wheelImage = loadImage("assets/images/Wheel.png");
  paperImageNormal = loadImage("assets/images/PaperNormal.png");
  paperImageBad = loadImage("assets/images/PaperNothing.png");
  paperImageGood = loadImage("assets/images/PaperGood.png");
  // Making for loops for the story images
  // Intro
  for (let i = 1; i <= introNumber; i++) {
    // Setting the file path
    let filePath = "assets/images/intro" + i + ".png";
    // Loading the images into the array
    introImages.push(loadImage(filePath));
  }
  // Scroll
  for (let i = 1; i <= scrollStoryNumber; i++) {
    // Setting the file path
    let filePath = "assets/images/scroll" + i + ".png";
    // Loading the images into the array
    scrollStoryImages.push(loadImage(filePath));
  }
  // Wheel
  for (let i = 1; i <= wheelStoryNumber; i++) {
    // Setting the file path
    let filePath = "assets/images/wheel" + i + ".png";
    // Loading the images into the array
    wheelStoryImages.push(loadImage(filePath));
  }
  // Paper
  for (let i = 1; i <= paperStoryNumber; i++) {
    // Setting the file path
    let filePath = "assets/images/paper" + i + ".png";
    // Loading the images into the array
    paperStoryImages.push(loadImage(filePath));
  }
  // Normal ending
  for (let i = 1; i <= normalEndStoryNumber; i++) {
    // Setting the file path
    let filePath = "assets/images/normalend" + i + ".png";
    // Loading the images into the array
    normalEndStoryImages.push(loadImage(filePath));
  }
  // Good ending
  for (let i = 1; i <= goodEndStoryNumber; i++) {
    // Setting the file path
    let filePath = "assets/images/goodend" + i + ".png";
    // Loading the images into the array
    goodEndStoryImages.push(loadImage(filePath));
  }
}

// setup()
//
// p5 function that sets up other functions or objects at the start of the program
function setup() {
  // Creating the canvas and adjusting its position by pixels
  let p5Canvas = createCanvas(650, 340);
  p5Canvas.position(355, 115);
  // Creating the states
  titleState = new TitleState();
  hubState = new HubState();
  scrollState = new ScrollState();
  scrollStory = new ScrollStory();
  wheelState = new WheelState();
  wheelStory = new WheelStory();
  paperState = new PaperState();
  paperStory = new PaperStory();
  experimentState = new ExperimentState();
  normalEnding = new NormalEnding();
  goodEnding = new GoodEnding();
  // Setting the current state
  currentState = titleState;
  // Adding the items
  wheelObject = new Wheel(-20, -5, wheelImage, 540, 320);
  scrollObject = new Scroll(1000, 175, scrollImage);
}

// draw()
//
// p5 function that calls a function for every frame
// It is also used to tell the current state to draw whatever is in its method
function draw() {
  currentState.draw();
}

// mousePressed()
//
// Makes a state activate its mousePressed function
function mousePressed() {
  currentState.mousePressed();
}
