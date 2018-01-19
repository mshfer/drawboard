# drawboard
## Using websockets to share drawings between clients.
The app uses [socket.io](https://socket.io) to establish a bidirectional realtime communication between clients and a server to share a drawing.

## About socket.io
[Socket.IO](https://socket.io) is a JavaScript library for realtime web applications. It enables realtime, bi-directional communication between web clients and servers. It has two parts: a client-side library that runs in the browser, and a server-side library for Node.js. Both components have a nearly identical API. Like Node.js, it is event-driven.
>[Socket.IO](https://socket.io) enables real-time bidirectional event-based communication.
It works on every platform, browser or device, focusing equally on reliability and speed.

## Use the app
* clone the repo
* install [node.js](https://nodejs.org/en/download/)
* cd into ../drawboard/server
    * _npm install express --save_
    * _npm install socket.io --save_
