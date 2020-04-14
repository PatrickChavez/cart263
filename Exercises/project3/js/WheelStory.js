// WheelStory
//
// State extension that displays images and text related to the think action for the wheel
class WheelStory extends State {
  constructor() {
    super();
    // Keeping track of the array index
    this.scriptPosition = 0;
  }

  // draw()
  //
  // Shows the story sequence
  draw() {
    // The script appears in the textbox
    // The text is called here so that the program immediately calls for it and not when the mouse is clicked
    $('#textbox').text(gameScript.wheelScript[this.scriptPosition]);
    // The image changes based on the script position
    if (this.scriptPosition === 0) {
      image(wheelStoryImages[0], 0, 0, width, height);
    }
    else if (this.scriptPosition === 2) {
      image(wheelStoryImages[1], 0, 0, width, height);
    }
    else if (this.scriptPosition === 3) {
      image(wheelStoryImages[2], 0, 0, width, height);
    }
    else if (this.scriptPosition === 5) {
      image(wheelStoryImages[3], 0, 0, width, height);
    }
    else if (this.scriptPosition === 7) {
      image(wheelStoryImages[4], 0, 0, width, height);
    }
    else if (this.scriptPosition === 8) {
      image(wheelStoryImages[5], 0, 0, width, height);
    }
    else if (this.scriptPosition === 11) {
      image(wheelStoryImages[6], 0, 0, width, height);
    }
    else if (this.scriptPosition === 12) {
      image(wheelStoryImages[7], 0, 0, width, height);
    }
    else if (this.scriptPosition === 13) {
      image(wheelStoryImages[8], 0, 0, width, height);
    }
    else if (this.scriptPosition === 15) {
      image(wheelStoryImages[9], 0, 0, width, height);
    }
    else if (this.scriptPosition === 17) {
      image(wheelStoryImages[10], 0, 0, width, height);
    }
    else if (this.scriptPosition === 19) {
      image(wheelStoryImages[11], 0, 0, width, height);
    }
    else if (this.scriptPosition === 20) {
      image(wheelStoryImages[12], 0, 0, width, height);
    }
    else if (this.scriptPosition === 22) {
      image(wheelStoryImages[13], 0, 0, width, height);
    }
    else if (this.scriptPosition === 25) {
      image(wheelStoryImages[14], 0, 0, width, height);
    }
    else if (this.scriptPosition === 27) {
      image(wheelStoryImages[15], 0, 0, width, height);
    }
  }

  // mousePressed()
  //
  //
  mousePressed() {
    // The dialog advances with each mouse click
    this.scriptPosition += 1;

    // The game proceeds to the hub screen once the script length is reached
    if (this.scriptPosition === gameScript.wheelScript.length) {
      currentState = hubState;
      // Displaying the menu
      $("#menu").css("opacity", 1);
      // The music changes
      stateMusic();
      // The text changes
      stateText();
      // The script position resets
      this.scriptPosition = 0;
    }
  }
}
