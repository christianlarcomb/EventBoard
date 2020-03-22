const express = require("express");
const app = express();
const server = require('http').createServer(app);
const io = require('socket.io').listen(server);
const axios = require("axios");

server.listen(process.env.PORT || 8080);

let users = [];
let connections = [];

// ROUTES
app.get("/", (req, res) => {
    res.send({response: "I am alive"}).status(200);
});


// WEBSOCKET CONNECTIONS
io.on("connection", socket => {

    connections.push(socket);
    console.log("Connected: new socket connected");

    socket.emit('Linked', {msg: "Succesfully linked!"});

    socket.on('disconnect', () => {
        console.log("Client disconnected");
        connections.splice(connections.indexOf(socket), 1)
    });

    socket.on('send message', data => {
        io.sockets.emit('new message', {msg: data})
    });

});