// Scroll
//
// A class that inherits from Item. It can move with the arrow keys.
class Scroll extends Item {
  constructor(x, y, image) {
    // Inheriting arguments from the Item class
    super(x, y, image);
    // Velocity and speed
    this.vx = 0;
    this.vy = 0;
    this.speed = 3;
    // Input properties
    this.leftKey = LEFT_ARROW;
    this.rightKey = RIGHT_ARROW;
  }

  // handleInput
  //
  // Checks if an arrow key is pressed and sets the item's velocity appropriately.
  handleInput() {
    // Horizontal movement
    if (keyIsDown(this.leftKey)) {
      this.vx = -this.speed;
    }
    else if (keyIsDown(this.rightKey)) {
      this.vx = this.speed;
    }
    else {
      this.vx = 0;
    }
  }

  // move()
  //
  // Handles the item's position according to velocity
  move() {
    // Update position
    this.x += this.vx;
    this.y += this.vy;
  }

  // display
  //
  // Shows a huge scroll on the canvas
  display() {
    push();
    // Centering image for precision shoud interaction occur
    imageMode(CENTER);
    image(this.image, this.x, this.y, 1300, 250);
    pop();
  }
}
