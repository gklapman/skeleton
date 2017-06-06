var express = require('express');
var morgan = require('morgan');
var bodyParser = require('body-parser');
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


// ---------------------------- ROUTERS -------------------------------//


const exampleRouter = require('./server/example')

app.use('/api/example', exampleRouter);

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

app.listen(3000, function() {
    console.log('Server is listening on port 3000!');
});


module.exports = {
  app
}

