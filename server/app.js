var path      = require('path');
var express      = require('express');
var bodyParser   = require('body-parser');
var session      = require('express-session');
var MemoryStore  = require('express-session').MemoryStore;
var cookieParser = require('cookie-parser');
var logger       = require('morgan');
// var oauth2       = require("./oauth2");

var topicRouter  = require("./routes/topicRouter");
var userRouter   = require("./routes/userRouter")

var app = express(); 

app.set('port', process.env.PORT || 19000);

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
// app.use(express.query());
app.use(cookieParser("xiaocc_"));
app.use(session({cookie: { maxAge: 20000},secret: 'zhangqh', resave: false, saveUninitialized: true}));
app.use(express.static(path.join(__dirname, '../build')));
// app.use(oauth2.oauth());
// app.use(oauth2.login());

app.use('/api', topicRouter);
app.use('/api', userRouter);

var server = app.listen(app.get('port'), function() {
  console.log('Express server listening on port ' + server.address().port);
});