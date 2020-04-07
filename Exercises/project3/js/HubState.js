// HubState
//
// Displays images and text related to the game's main hub
class HubState extends State {
  constructor() {
    super();
  }

  // draw()
  //
  // Shows the background and displays the items
  draw() {
    // Displaying the background
    background(0);
    // Displaying the items
    scrollIcon.display();
    wheelIcon.display();
    paperIcon.display();
  }

  // mousePressed()
  //
  //
  mousePressed() {

  }
}
