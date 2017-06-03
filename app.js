var express = require('express');
var ejs = require('ejs');
var app = express();
var cookieParser = require('cookie-parser');

app.engine('ejs', ejs.renderFile);
app.use(cookieParser());

app.get('/', function(req, res) {
    var count = req.cookies.count == undefined ? 0 : req.cookies.count;
    count++;
    res.cookie('count', count, {maxAge: 5000});
    res.render('temp.ejs', {
        count: count
    });
});

var server = app.listen(1234, function() {
    console.log("Start Server");
});
