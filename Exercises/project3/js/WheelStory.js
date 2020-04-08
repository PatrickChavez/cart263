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
    // Displaying the image
    image(storyImagePlaceholder, 0, 0, width, height);
    // The script appears in the textbox
    // The text is called here so that the program immediately calls for it and not when the mouse is clicked
    $('#textbox').text(gameScript.wheelScript[this.scriptPosition]);
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
