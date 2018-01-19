// store the function in a variable called express
var express = require('express');
// store the result of the function in a variable called app
var app = express();
// listen to port 3000 on localhost
var server = app.listen(3000);
// host everything in 'client'-folder accessible from the clients
app.use(express.static('../client'));

// print to console
console.log("Server is running");

// store the function in a variable called socket
var socket = require('socket.io');
// make a new socket connection
var io = socket(server);
// on connect
io.sockets.on('connection', newConnection);
function newConnection(socket) {
  console.log("A client connected: " + socket.id);
}
