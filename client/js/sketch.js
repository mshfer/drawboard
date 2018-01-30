function setup() {
  createCanvas(600, 400);
  background(0);

  // connect to the server
  socket = io.connect('http://localhost:3000');
  // receiving
  socket.on('mouseEvent', newDrawing);
}

function newDrawing(data) {
  noStroke();
  fill(255, 0, 100);
  ellipse(data.x, data.y, 20, 20);
}

function mouseDragged() {
  noStroke();
  fill(255);
  ellipse(mouseX, mouseY, 20, 20);

  // pack mouse coordinates into data
  var data = {
    x: mouseX,
    y: mouseY
  }

  // send the data from client to server
  socket.emit('mouseEvent', data);
}

function draw() {

}
