var express = require('express');
var bodyParser = require('body-parser');

var topicRouter = require("./routes/topicRouter");
var userRouter = require("./routes/userRouter")

var app = express(); 

app.use(bodyParser.json());
app.use(bodyParser.urlencoded());

app.use('/api', topicRouter);
app.use('/api', userRouter);

app.set('port', process.env.PORT || 19000);

var server = app.listen(app.get('port'), function() {
  console.log('Express server listening on port ' + server.address().port);
});