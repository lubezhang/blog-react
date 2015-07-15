var http       = require('http');
var path       = require('path');

var express    = require('express');
var partials   = require('express-partials');
var MongoStore = require('connect-mongo')(express);
var flash      = require('connect-flash');
var routes     = require('./routes');
var app        = express();

// all environments
app.set('port', process.env.PORT || 9000);

app.use(partials());
app.use(express.favicon());
app.use(flash());
app.use(express.logger('dev'));
// 解析请求体，可以从request中获取传递的参数
app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(express.cookieParser("superTopSecret")); 
app.use(express.session());	//使用内存存储Session信息
// 加载路由信息
app.use(routes(app));
// 设置静态文件路径
app.use(express.static(path.join(__dirname, '../build')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

http.createServer(app).listen(app.get('port'), function(){
	console.log('>>>>>>>>>>>>>>>>>>>>>>Express server listening on port %d in %s mod', app.get('port'), app.get("env"));
});
