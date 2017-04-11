var express = require('express');
var nunjucks = require('nunjucks');
var morgan = require('morgan');
var bodyParser = require('body-parser');
var {   db, User, Location, ProfilePhoto, LocationPhoto, Activity, Restaurant, Hotel, LocationFriendship, Friend } = require('./db/index');
var Sequelize = require('sequelize');
var Promise = require('bluebird')

var app = express();



var travelpageRouter = require('./routes/travelpage');
var travelfeedRouter = require('./routes/travelfeed');
var locationRouter = require('./routes/location')
var createaccountRouter = require('./routes/createaccount')
var photoRouter = require('./routes/photos')

var env = nunjucks.configure('views', { noCache: true });
app.engine('html', nunjucks.render);
app.set('view engine', 'html');

var AutoEscapeExtension = require("nunjucks-autoescape")(nunjucks);
env.addExtension('AutoEscapeExtension', new AutoEscapeExtension(env));

app.use(morgan('dev'));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(bodyParser.raw());

app.use(express.static(__dirname + '/node_modules'));
app.use(express.static(__dirname + '/public'));


app.use('/travelpage', travelpageRouter);
app.use('/travelfeed', travelfeedRouter);
app.use('/location', locationRouter);
app.use('/createaccount', createaccountRouter);
app.use('/photos', photoRouter)


app.use('/', function(req, res, next) {
    res.redirect('/createaccount');
});


app.use(function(err, req, res, next) {
    console.error(err);
    res.status(err.status || 500).send(err.message);
});


app.listen(3001, function() {
    console.log('Server is listening on port 3001!');
});



module.exports = app;
