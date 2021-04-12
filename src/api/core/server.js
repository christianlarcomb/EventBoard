const express = require("express"),
      app = express(),
      server = require('http').createServer(app),
      io = require('socket.io').listen(server),
      axios = require("axios"),
      twitter = require('twitter');

server.listen(process.env.PORT || 8080);

const twit = new twitter({
    consumer_key: '[REDACTED]',
    consumer_secret: '[REDACTED]',
    access_token_key: '[REDACTED]',
    access_token_secret: '[REDACTED]'
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

    socket.on('stream_tweets', data => {

        // Starting twitter stream with specified data...
        twit.stream('statuses/filter', { track: data }, stream =>
        {
            // Streaming the data to the specific websocket which requested the stream...
            stream.on('data', data => {
                if(data.text && data.user.name && data.user.screen_name && data.user.profile_image_url){
                    io.sockets.emit('tweet', data);
                    console.log(data)
                }
            });

        });

    })

});
