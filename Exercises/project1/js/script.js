"use strict";

/********************************************************************

Project 1 - Slime Champion
Patrick Chavez-Nadarajah

Defeat all the enemies by clicking on them! Can you do it before being
overwhelmed?

8bit 18/しゅくめいのたたかい/Fighting from Maoudamashii
https://maoudamashii.jokersounds.com/list/bgm11.html

Retro 11 sound effect from Maoudamashii
https://maoudamashii.jokersounds.com/list/se13.html

Press Start 2P font by codeman38
https://www.fontspace.com/codeman38/press-start-2p

04b_30 font by 04
https://www.dafont.com/04b-30.font
http://www.04.jp.org/

offsetEnemy() function based on Pippin Barr's Endless Dialogs code
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

// Adding a variable for the time it takes to warp an enemy
let warpInterval = 2000;

// Adding a variable for the time it takes to spawn an enemies
let spawnInterval = 250;

// Adding a variable for the time it takes to remove an enemy
let removeInterval = 1500;

// setup()
//
// Activates event handlers that correspond to their respective elements
function setup() {
  // Storing the enemy class in a variable so that it may be used
  // once universally in the script
  $enemy = $(".enemy");

  // Adding a dialog window containing the game's instructions
  $("#dialog").dialog();

  // The background music starts when the mouse is clicked
  $(document).one("mousedown", startMusic);

  // An enemy appears after a certain amount of time
  setInterval(addEnemy, spawnInterval);

  // An enemy warps after a certain amount of time
  setInterval(warpEnemy, warpInterval);

  // A defeated enemy will disappear after a certain amount of time
  setInterval(removeEnemy, removeInterval);

  // Clicking on an enemy will put it in a "defeat" state
  $enemy.on("click", defeatEnemy);
}

// addEnemy()
//
// Spawns a set of enemies after a certain amount of time has passed
function addEnemy() {
  console.log("Adding enemy");
  // Generating a non-decimal number between 1 and 4 in order to spawn
  // one random slime
  let slimeNumber = 1 + Math.floor(Math.random() * 4);
  // Spawns a certain enemy using a template literal
  let $enemy = $(`<img class="enemy"src="assets/images/Slime${slimeNumber}.png" alt="Enemy">`);
  // Adding the new enemies to the HTML body
  $("body").append($enemy);
  // The total enemy text reflects the number of actual enemies present
  enemyTotal = $(".enemy").length;
  $("#totalEnemies").text(enemyTotal);
  // Making it so that the defeatEnemy function applies to all the newly
  // created slimes
  $enemy.on("click", defeatEnemy);
}

// warpEnemy
//
// Changes the position of an enemy after an interval
function warpEnemy() {
  // Make the enemy spawn in a random location on the window
  $(".enemy").each(offsetEnemy);
}

// offsetEnemy()
//
// Makes an individual enemy warp around the room
function offsetEnemy() {
  $(this).offset({
    top: Math.random() * $(window).height(),
    left: Math.random() * $(window).width()
  });
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
// Makes an enemy class' attribute into a "defeated" image
function defeatEnemy() {
  // A "defeat" image is shown
  $(this).attr("src", "assets/images/EnemyDefeat.png");
  // A sound effect is played
  slashSFX.play();
}

// defeatStatus
//
// Sets the enemy up to be removed by another function
function defeatStatus() {
  // If an enemy's attribute is that of "EnemyDefeat", then...
  if ($(this).attr("src") === "assets/images/EnemyDefeat.png") {
    // The number of enemies slain increases
    enemiesSlain += 1;
    // The text of the slain enemies shows an accurate number
    $("#slainEnemies").text(enemiesSlain);
    // The enemy is removed
    $(this).remove();
  }
}

// removeEnemy()
//
// Removes any enemy with the defeated status
function removeEnemy() {
  $(".enemy").each(defeatStatus);
}
