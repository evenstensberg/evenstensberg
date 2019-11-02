const favicon = require('serve-favicon');
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const session = require('cookie-session');
const http = require('http');
const https = require('https');
const cors = require("cors")
const app = express();
const config = require('./api/config.js');

app.use(cors());
app.options('*', cors());

app.use(bodyParser.json({
    limit: '50mb'
}));
app.use(bodyParser.urlencoded({limit: '50mb', extended: true}));
app.use(express.static(path.join(__dirname, 'public')));
app.use(favicon(__dirname + '/favico.ico'));

/* app.use(
	session({
		secret: config.secret,
		signed: true,
	}),
); */

app.get('*', function(req, res) {
    res.sendFile('index.html', {root: path.join(__dirname, 'public')})
});

app.use('/', require('./api/routes')(config));

app.use(function(req, res, next) {
    var oneof = false;
    if(req.headers.origin) {
        res.header('Access-Control-Allow-Origin', req.headers.origin);
        oneof = true;
    }
    if(req.headers['access-control-request-method']) {
        res.header('Access-Control-Allow-Methods', req.headers['access-control-request-method']);
        oneof = true;
    }
    if(req.headers['access-control-request-headers']) {
        res.header('Access-Control-Allow-Headers', req.headers['access-control-request-headers']);
        oneof = true;
    }
    if(oneof) {
        res.header('Access-Control-Max-Age', 60 * 60 * 24 * 365);
    }

    // intercept OPTIONS method
    if (oneof && req.method == 'OPTIONS') {
        res.send(200);
    }
    else {
        next();
    }
});

app.use(function(req, res) {
	res.status(404).send('Not Found');
});

// Basic error handler
app.use(function(err, req, res, next) {
	console.error(err);

	// Send response if exists, if not send a custom message
	res.status(500).send(err.response || 'Server failed!');
});

const httpServer = http.createServer(app);
httpServer.listen(3000);

const server = https.createServer({}, app);

// Start the server
const PORT = process.env.PORT || 8080;

server.listen(PORT, () => {
    console.log(`App listening on port ${PORT} 🥰`);
    console.log('Press Ctrl+C to quit.');
});

