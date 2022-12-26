function setup() {
  createCanvas(500, 400);
  songTrail.loop();
}

function draw() {
  background(imageRoad);
  showActor();
  moveActor();
  showCar();
  moveCar();
  loopCar();
  collisionActor();
  score();
  scorePoints();
}
