var express = require('express');
var router = express.Router();
var { db, User, Location } = require('../db/index')
var Promise = require('bluebird');

router.get('/', function(req, res, next) {
	res.send('this will be the travelfeed')
})


module.exports = router;
