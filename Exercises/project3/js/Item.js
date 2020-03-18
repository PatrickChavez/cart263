// Item
//
// A class representing an object the player interacts with that either brings
// up dialogue, or changes the game state
class Item {
  // constructor
  //
  // Sets the item's properties (either default values or arguments)
  constructor(x, y, image, radius) {
    this.x = x;
    this.y = y;
    this.image = image;
    this.radius = radius;
  }


  // display
  //
  // Shows an appropritate item on the canvas
  display() {
    push();
    // Centering image for precision shoud interaction occur
    imageMode(CENTER);
    image(this.image, this.x, this.y, this.radius * 2, this.radius * 2);
    pop();
  }
}
