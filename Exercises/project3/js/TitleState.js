// TitleState
//
// Displays images and text related to the title screen and game intro
class TitleState extends State {
  constructor() {
    super();
    // Keeping track of the index
    this.scriptPosition = 0;
  }

  // draw()
  //
  // Shows the intro images
  draw() {
    // The image changes based on the script position
    if (this.scriptPosition === 0) {
      image(introImages[0], 0, 0, width, height);
    }
    else if (this.scriptPosition === 1) {
      image(introImages[1], 0, 0, width, height);
    }
    else if (this.scriptPosition === 3) {
      image(introImages[2], 0, 0, width, height);
    }
    else if (this.scriptPosition === 4) {
      image(introImages[3], 0, 0, width, height);
    }
    else if (this.scriptPosition === 7) {
      image(introImages[4], 0, 0, width, height);
    }
    else if (this.scriptPosition === 8) {
      image(introImages[5], 0, 0, width, height);
    }
    else if (this.scriptPosition === 9) {
      image(introImages[6], 0, 0, width, height);
    }
    else if (this.scriptPosition === 10) {
      image(introImages[7], 0, 0, width, height);
    }
  }

  // mousePressed()
  //
  // Advances through the game text
  mousePressed() {
    // The intro script appears in the textbox
    $('#textbox').text(gameScript.introScript[this.scriptPosition]);
    // The dialog advances with each mouse click
    this.scriptPosition += 1;

    // The game proceeds to the hub screen once the script length is reached
    // "+ 1" is given in order for the final array index to show itself 
    if (this.scriptPosition === gameScript.introScript.length + 1) {
      currentState = hubState;
      // Displaying the menu
      $("#menu").css("opacity", 1);
      // The music changes
      stateMusic();
      // The text changes
      stateText();
    }
  }
}
