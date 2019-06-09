const express = require('express');
const path = require('path')
const app = express();
const socketIO = require("socket.io");
const http = require('http');
const favicon = require('serve-favicon');

app.use(express.static('public'))
app.use(favicon(__dirname + '/favico.ico'));
app.get('*', function(req, res) {
    res.sendFile('index.html', {root: path.join(__dirname, 'public')})
});

const server = http.createServer(app);

const io = socketIO(server);

io.on("connection", socket => {
    console.log("New client connected" + socket.id);

    /* socket.on("yolo", () => {
        console.log("Hi from server")
        try {
            const {spawn} = require("child_process"); 
            const twProc = spawn('python3',["../twitter-fun/index.py"]); 
            const spotifyProc = spawn('python3',["../spotify-api-benchmark/index.py"] );

            twProc.stdout.on('data', function(data) {
                console.log(data);
            })
            spotifyProc.stdout.on('data', function(data) { 
                console.log(data);
            }) 
        } catch(err) {
            console.log(err)
        }); */
});

// Start the server
const PORT = process.env.PORT || 8080;
server.listen(PORT, () => {
  console.log(`App listening on port ${PORT} 🥰`);
  console.log('Press Ctrl+C to quit.');
});