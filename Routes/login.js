var express = require('express');
var router = express.Router();
var {   db, User, Location, ProfilePhoto, LocationPhoto, Activity, Restaurant, Accomadation, LocationFriendship, Friend } = require('../db/index');
var Promise = require('bluebird');

router.post('/', function (req, res, next){
	return User.findOne({
		where: {
			email: req.body.email,
			password: req.body.password
		}
	})
	.then(user => {
		if (user){
			req.session.user = user.userInfo
			res.json(user.userInfo)
		} else {
			res.send('user not found')
		}
	})
	.catch(next)
})


module.exports = router;