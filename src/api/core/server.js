const express = require("express"),
      app = express(),
      server = require('http').createServer(app),
      io = require('socket.io').listen(server),
      axios = require("axios"),
      twitter = require('twitter');

server.listen(process.env.PORT || 8080);

const twit = new twitter({
    consumer_key: 'pPIMfguuHex6yVrkXvveQkT0x',
    consumer_secret: 'OlZc7W4vbuwbjgd7lmlTgz0JgIUrLz2Ta48oBaJ6K9ntdU65He',
    access_token_key: '1234935237085401090-pDDIe1DlqYsqBb6bAgE2MJrBhy9VU7',
    access_token_secret: 'yD5jRnebIzfaggcD46cW6dA188STp2XPFSMxC0FAo7kA7'
});

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


// STREAMS THE TWEETS?!
twit.stream('statuses/filter', { track: 'covid' }, function(stream)
{
    stream.on('data', data => {
        if(data.text && data.user.name && data.user.screen_name && data.user.profile_image_url){
            io.sockets.emit('tweet', data);
            console.log(data)
        }
    });

});