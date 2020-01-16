var express = require('express');
var app = express();

app.get('/', function (req, res) {
    res.send("Hello world!");
});
//localhost:3000/add?a=2&b=3
app.get('/add', function (req, res) {
    var a = parseFloat(req.query.a);
    var b = parseFloat(req.query.b);
    var num = a + b
    res.send(num.toString());
});

app.listen(3000);