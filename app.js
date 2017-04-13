var express = require('express');
var nunjucks = require('nunjucks');
var morgan = require('morgan');
var bodyParser = require('body-parser');
var {   db, User, Location, ProfilePhoto, LocationPhoto, Activity, Restaurant, Accomadation, LocationFriendship, Friend } = require('./db/index');
var Sequelize = require('sequelize');
var Promise = require('bluebird');
var path = require('path')

var app = express();

// --------------------------- MIDDLEWARE ----------------------------- //
app.use(morgan('dev'));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(bodyParser.raw());

app.use(express.static(__dirname + '/node_modules'));
app.use(express.static(__dirname + '/public'));

// ---------------------------- ROUTERS -------------------------------//

var travelpageRouter = require('./routes/travelpage');
var travelfeedRouter = require('./routes/travelfeed');
var locationRouter = require('./routes/location')
var createaccountRouter = require('./routes/createaccount')
var loginRouter = require('./routes/login')

app.use('/api/travelpage', travelpageRouter);
app.use('/api/travelfeed', travelfeedRouter);
app.use('/api/location', locationRouter);
app.use('/api/createaccount', createaccountRouter);
app.use('/api/login', loginRouter);

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



module.exports = app;
