require('dotenv').config();

var express = require('express');
var rainbow = require('rainbow');
var hoganX  = require('hogan-express');
var mustlayout = require('mustlayout');
var cookieParser = require('cookie-parser');
var cookieSession = require('cookie-session');

var config  = require('./config');

var startTime = new Date();

var app = express();

app.use(cookieParser());
app.use(cookieSession({
	name: 'token',
	secret: Date.now().toString(16)
}));

app.use(require('./filters/response'));

app.use('/css', express.static(__dirname + '/node_modules/bootstrap/dist/css'));
app.use('/bt', express.static(__dirname + '/node_modules/bootstrap-table/dist'));
app.use('/js', express.static(__dirname + '/node_modules/jquery/dist'));
app.use('/js', express.static(__dirname + '/node_modules/bootstrap/dist/js'));

// 路由处理
rainbow.route(app, config.path);

// 模板引擎配置
mustlayout.engine(app, {
    engine: hoganX,
    ext: config.viewExt,
    views: config.path.views,
    partials: config.path.partials,
    layouts: config.path.layouts,
    cache: config.path.cache
});

var port = process.env.PORT;

app.listen(port, function() {
	console.log("Server start at %s. Listening on %d", startTime, port);
});
