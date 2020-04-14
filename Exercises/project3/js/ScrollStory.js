// ScrollStory
//
// State extension that displays images and text related to the think action for the scroll
class ScrollStory extends State {
  constructor() {
    super();
    // Keeping track of the JSON scrollScript array index
    this.scriptPosition = 0;
  }

  // draw()
  //
  // Shows the story sequence
  draw() {
    // The script appears in the textbox
    // The text is called here so that the program immediately calls for it and not when the mouse is clicked
    $('#textbox').text(gameScript.scrollScript[this.scriptPosition]);
    // The image changes based on the script position
    if (this.scriptPosition === 0) {
      image(scrollStoryImages[0], 0, 0, width, height);
    } else if (this.scriptPosition === 1) {
      image(scrollStoryImages[1], 0, 0, width, height);
    } else if (this.scriptPosition === 2) {
      image(scrollStoryImages[2], 0, 0, width, height);
    } else if (this.scriptPosition === 5) {
      image(scrollStoryImages[3], 0, 0, width, height);
    } else if (this.scriptPosition === 7) {
      image(scrollStoryImages[4], 0, 0, width, height);
    } else if (this.scriptPosition === 9) {
      image(scrollStoryImages[5], 0, 0, width, height);
    } else if (this.scriptPosition === 13) {
      image(scrollStoryImages[6], 0, 0, width, height);
    } else if (this.scriptPosition === 14) {
      image(scrollStoryImages[7], 0, 0, width, height);
    } else if (this.scriptPosition === 16) {
      image(scrollStoryImages[8], 0, 0, width, height);
    } else if (this.scriptPosition === 18) {
      image(scrollStoryImages[9], 0, 0, width, height);
    } else if (this.scriptPosition === 19) {
      image(scrollStoryImages[10], 0, 0, width, height);
    } else if (this.scriptPosition === 20) {
      image(scrollStoryImages[11], 0, 0, width, height);
    } else if (this.scriptPosition === 21) {
      image(scrollStoryImages[12], 0, 0, width, height);
    } else if (this.scriptPosition === 22) {
      image(scrollStoryImages[13], 0, 0, width, height);
    }
  }

  // mousePressed()
  //
  //
  mousePressed() {
    // The dialog advances with each mouse click
    this.scriptPosition += 1;
    // The game proceeds to the hub screen once the script length is reached
    if (this.scriptPosition === gameScript.scrollScript.length) {
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
