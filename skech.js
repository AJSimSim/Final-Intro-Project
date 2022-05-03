let bird;
let ground;
let wood;

function setup() {
  createCanvas(800, 400);
  ground = new Wood(0, height-20, width, 20);
  wood = new Wood(450, 300, 50, 100);
  bird = new Bird(50, 300, 30);
}

function draw() {
  background(100);
  ground.show()
  wood.show()
  bird.show()
}
