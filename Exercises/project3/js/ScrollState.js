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
    background(0);
    // Displaying the scroll and its handling
    scrollPlaceholder.display();
    scrollPlaceholder.handleInput();
    scrollPlaceholder.move();
  }

  // mousePressed()
  //
  //
  mousePressed() {

  }
}
