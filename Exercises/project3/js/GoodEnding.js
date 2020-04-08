// GoodEnding
//
// State extension that displays images and text related to the normal ending
class GoodEnding extends State {
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
    image(goodEndImagePlaceholder, 0, 0, width, height);
    // The script appears in the textbox
    // The text is called here so that the program immediately calls for it and not when the mouse is clicked
    $('#textbox').text(gameScript.goodEndingScript[this.scriptPosition]);
  }

  // mousePressed()
  //
  //
  mousePressed() {
    // The dialog advances with each mouse click
    this.scriptPosition += 1;
  }
}
