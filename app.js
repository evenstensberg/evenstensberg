const express = require('express');
const path = require('path')
const app = express();
const socketIO = require("socket.io");
const http = require('http');
const Feed = require('rss-to-json');
const favicon = require('serve-favicon');

app.use(express.static('public'))
app.use(favicon(__dirname + '/favico.ico'));
app.get('*', function(req, res) {
    res.sendFile('index.html', {root: path.join(__dirname, 'public')})
});



async function getMediumPosts() {
    let data = [];
    const token = process.env.MEDIUM_ID;
    return new Promise( (resolve, reject) => {
        Feed.load('https://medium.com/feed/webpack', function(err, rss){
            resolve(rss.items);
        })
    }).then(resp => {
        return new Promise( (resolve, reject) => {
            Feed.load('https://medium.com/feed/@evenstensberg', function(err2, rss2){
                resolve(rss2.items);
            });
        }).then(resp2 => {
            const resp3 = resp2.concat(...resp);
            return resp3;
        })
    })
}

const server = http.createServer(app);

const io = socketIO(server);



io.on("connection", socket => {
    console.log("New client connected" + socket.id);
    socket.on("get_medium_posts", () => {
        getMediumPosts().then(resp => {
            let newData = resp.filter( post => {
                let isMine = post.title.indexOf("CLI") >= 0 || post.title.indexOf("cli") >= 0 || post.link.indexOf("evenstensberg") >= 0;
                return isMine && post.title !== "Thanks for the comment. We are going to enforce webpack-cli.";
            }).map( post => {
                return Object.assign(post, {
                    external: true
                })
            })
            io.emit('server_medium_posts', resp);
        })
    });
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
        }
    }); */
});
// Start the server
const PORT = process.env.PORT || 8080;
server.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
  console.log('Press Ctrl+C to quit.');
});