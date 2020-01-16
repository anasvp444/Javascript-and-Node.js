var express = require('express');
var app = express();

app.get('/', function (req, res) {
    res.send("Hello world!");
});
app.get('/rand', function (req, res) {
    var num = Math.floor(Math.random() * 100)
    res.send(num.toString());
});

app.listen(3000);