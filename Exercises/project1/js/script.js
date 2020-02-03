"use strict";

/********************************************************************

Project 1 - Slime Champion
Patrick Chavez-Nadarajah

Defeat all the enemies by clicking on them! Can you do it before being
overwhelmed?

8bit 18/しゅくめいのたたかい/Fighting from Maoudamashii
https://maoudamashii.jokersounds.com/list/bgm11.html

Retro 11 from Maoudamashii
https://maoudamashii.jokersounds.com/list/se13.html

Press Start 2P Font by codeman38
https://www.fontspace.com/codeman38/press-start-2p

04b_30 Font by 04
https://www.dafont.com/04b-30.font
http://www.04.jp.org/

Random position function based on Pippin Barr's Endless Dialogs code
https://github.com/pippinbarr/cart263-2020/blob/master/course-information/course-schedule.md#week-4

*********************************************************************/

// The script will start once the webpage has loaded
$(document).ready(setup);

// Adding audio
let bgMusic = new Audio("assets/sounds/bgm_maoudamashii_8bit18.mp3");
let slashSFX = new Audio("assets/sounds/se_maoudamashii_retro11.mp3");

// Adding a variable to the enemies
let $enemy;

// Adding a variable for slain enemies
let enemiesSlain = 0;

// Adding a variable for the total number of enemies
let enemyTotal;

// Adding a variable for the interval time
let intervalTime = 1000;

// setup()
//
// Activates event handlers that correspond to their respective elements
function setup() {
  // Storing the enemy class in a variable so that it may be used
  // universally in the script
  $enemy = $(".enemy");

  // Adding a dialog window containing the game's instructions
  $("#dialog").dialog();

  // The background music starts when the mouse is clicked
  $(document).one("mousedown", startMusic);

  // An enemy appears after a certain amount of time
  setInterval(addEnemy, intervalTime);

  // Clicking on an enemy will make it disappear
  $enemy.on("click", defeatEnemy);
}

// addEnemy()
//
// Spawns a set of enemies after a certain amount of time has passed
function addEnemy() {
  console.log("Adding enemy");
  // Spawns another set of enemies
  let enemy = $('<div><img class="enemy"src="/assets/images/Slime1.png" alt="Enemy"></div>');
  let enemy2 = $('<div><img class="enemy"src="/assets/images/Slime2.png" alt="Enemy"></div>');
  let enemy3 = $('<div><img class="enemy"src="/assets/images/Slime3.png" alt="Enemy"></div>');
  let enemy4 = $('<div><img class="enemy"src="/assets/images/Slime4.png" alt="Enemy"></div>');
  // enemy.addClass('enemy'); TO REMOVE
  //  Adding the enemies to the HTML boby
  $("body").append(enemy, enemy2, enemy3, enemy4);
  // The total enemy text reflects the number of actual enemies present
  enemyTotal = $(".enemy").length; // Variable doesn't work?
  $("#totalEnemies").text(enemyTotal);
}

// startMusic
//
// Activates the background music when this function is called
function startMusic() {
  // Making it so the music loops
  bgMusic.loop = true;
  bgMusic.play();
}

// defeatEnemy
//
// Makes an enemy class disappear and repositions it somewhere on the webpage
function defeatEnemy() {
  // The enemy gets removed
  $enemy.remove();
  // A sound effect is played
  slashSFX.play();
  // The number of enemies slain increases
  enemiesSlain += 1;
  // Presenting the text of the slain enemies
  $("#slainEnemies").text(enemiesSlain);
}
