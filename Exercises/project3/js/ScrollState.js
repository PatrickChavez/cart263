// ScrollState
//
// Displays images and text related to the scroll viewing
class ScrollState extends State {
  constructor() {
    super();
  }

  // draw()
  //
  // Shows the scroll and it's controls
  draw() {
    // Displaying the background
    image(scrollBackground, 0, 0, width, height);
    // Displaying the scroll and its handling
    scrollObject.display();
    scrollObject.handleInput();
    scrollObject.move();
  }

  // mousePressed()
  //
  //
  mousePressed() {

  }
}
