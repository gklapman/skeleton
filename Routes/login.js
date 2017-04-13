var express = require('express');
var router = express.Router();
var {   db, User, Location, ProfilePhoto, LocationPhoto, Activity, Restaurant, Accomadation, LocationFriendship, Friend } = require('../db/index');
var Promise = require('bluebird');

router.post('/', function (req, res, next){
	console.log('inside of get request', req.body)
	return User.findOne({
		where: {
			email: req.body.email,
			password: req.body.password
		}
	})
	.then(user => {
		if (user){
			res.json(user.userInfo)
		} else {
			res.send('user not found')
		}
	})
	.catch(next)
})


module.exports = router;