var express = require('express');
var path = require('path');

var app = express();

app.use(express.static('public'));

app.get('/', function (req, res) {
	res.send('index.html');
});

app.get('/geo', function (req, res) {
	res.send('I am working!');
});


app.listen(1337, function () {
	console.log('The magic is going down on 1337!')
});