
/**
 * Module dependencies.
 */
//require('newrelic');
var express = require('express');
var connect = require('connect');
var routes = require('./routes');
var user = require('./routes/user');
var http = require('http');
var path = require('path');

var mongo = require('mongodb');
var monk = require('monk');

//uncomment for heroku
//var uri = process.env.MONGOLAB_URI;
//var db = monk(uri)

//uncomment for local
var db = monk('localhost:27017/nodestrap');

var app = express();

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
app.use(connect.favicon());
app.use(connect.logger('dev'));
app.use(connect.json());
app.use(connect.urlencoded());
app.use(connect.methodOverride());
//app.use(app.router);
app.use(connect.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  app.use(connect.errorHandler());
}

app.get('/', routes.index);
app.get('/users', user.list);
app.get('/login', routes.login);
app.get('/register', routes.register);
app.get('/about', routes.about);
app.get('/contact', routes.contact);
app.get('/success', routes.success);
app.get('/registersuccess', routes.registersuccess);
app.get('/memberlist', routes.memberlist(db));
app.get('/fail', routes.fail);
app.get('/settings', routes.settings);

app.post('/registeruser', routes.registeruser(db));

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
