var express = require('express');
var ejs = require('ejs');
var app = express();
var session = require('express-session');

app.engine('ejs', ejs.renderFile);
app.use(session( {
    secret: 'hoge',
    resave: true,
    saveUninitialized: true,
}));

app.get('/', function(req, res) {
    var count = req.session.count == undefined ? 0 : req.session.count;
    count++;
    req.session.count = count;
    res.render('temp.ejs', {
        count: count
    });
});

var server = app.listen(1234, function() {
    console.log("Start Server");
});
