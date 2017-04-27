var express = require('express');
var nunjucks = require('nunjucks');
var morgan = require('morgan');
var bodyParser = require('body-parser');
var {   db, User, Location, ProfilePhoto, LocationPhoto, Activity, Restaurant, Accomadation, LocationFriendship, Friend } = require('./db/index');
var Sequelize = require('sequelize');
var Promise = require('bluebird');
var path = require('path')
var session = require('express-session');
var volleyball = require('volleyball');
var {resolve} = require('path')

var app = express();
// var secretFile = require('../index')

// --------------------------- MIDDLEWARE ----------------------------- //
app.use(morgan('dev'));

// app.use(volleyball);

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(bodyParser.raw());

app.use(express.static(__dirname + '/node_modules'));
app.use(express.static(__dirname + '/public'));

app.use(session({
  // this mandatory configuration ensures that session IDs are not predictable ***
  secret: 'supersecretcode', // or whatever you like
  // these options are recommended and reduce session concurrency issues
  resave: false,
  saveUninitialized: false
}));

// app.use(function (req, res, next) {
//   console.log('session', req.session);
//   next();
// });


// ---------------------------- ROUTERS -------------------------------//

var travelpageRouter = require('./server/travelpage');
var travelfeedRouter = require('./server/travelfeed');
var locationRouter = require('./server/location')
var createaccountRouter = require('./server/createaccount')
var loginRouter = require('./server/login')
var meRouter = require('./server/me')

app.use('/api/travelpage', travelpageRouter);
app.use('/api/travelfeed', travelfeedRouter);
app.use('/api/location', locationRouter);
app.use('/api/createaccount', createaccountRouter);
app.use('/api/login', loginRouter);
app.use('/api/me', meRouter);

//---------------------- STATIC FILE ERROR CATCHER----------------------//

app.use(function (req, res, next) {

    if (path.extname(req.path).length > 0) {
        res.status(404).end();
    } else {
        next(null);
    }

});

// ------------------------RENDER INDEX.HTML -------------------------//

app.get('/*', function (req, res) {
    res.sendFile(path.resolve(__dirname, 'react', 'index.html'));
});

//--------------------------ERROR HANDLING ---------------------------//

app.use(function(err, req, res, next) {
    console.error(err);
    res.status(err.status || 500).send(err.message);
});


// -------------------------CONNECT TO SERVER-------------------------//

app.listen(3001, function() {
    console.log('Server is listening on port 3001!');
});


module.exports = {
  app
}

