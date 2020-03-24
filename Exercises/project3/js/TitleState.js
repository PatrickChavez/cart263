// TitleState
//
// Displays images and text related to the title screen and game intro
class TitleState extends State {
  constructor() {
    super();
  }

  // draw()
  //
  // Shows the title screen
  draw() {
    image(titleImage, 0, 0, width, height);
  }

  // mousePressed()
  //
  // The game proceeds to the hub screen
  mousePressed() {
    currentState = hubState;
    // Displaying the menu
    $("#menu").css("opacity", 1);
  }
}
