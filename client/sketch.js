function setup() {
  createCanvas(600, 400);
  background(0);

  // connect to the server
  socket = io.connect('http://localhost:3000');
}

function draw() {
  noStroke();
  fill(255);
  ellipse(mouseX, mouseY, 20, 20);
}
