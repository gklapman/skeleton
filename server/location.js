var express = require('express');
var router = express.Router();
var {   db, User, Location, ProfilePhoto, LocationPhoto, Activity, Restaurant, Accomadation, LocationFriendship, Friend } = require('../db/index');
var Promise = require('bluebird');
var s3Utils = require('./s3Utils')
var aws = require('aws-sdk')
var {secretsFile} = require('../index')


aws.config.update({
  signatureVersion: 'v4',
  accessKeyId: secretsFile.AWSAccessKeyId,
  secretAccessKey: secretsFile.AWSSecretKey,
})


const s3 = new aws.S3({}) //WHAT IS THIS DOING?


// /api/location
router.get('/sign', (req, res, next) => {
	s3Utils.sign(req.query.filename, req.query.filetype, res)
})

router.post('/addphoto', (req, res, next) => {
	return LocationPhoto.create({
		filepath: req.body.Url, 
		locationId: req.body.locationId
	})
	then(locationphoto => {
		res.json(locationphoto)
	})
})

router.get('/:locationId', function(req, res, next) {
	console.log('inside of server side location request ', req.params.locationId)
	var locationInfo = {};
		Location.findOne({
            where: {
                id: req.params.locationId
            }, 
            include: [Activity, Accomadation, Restaurant]

        })
        .then(location => {
            locationInfo.location = location;
            let userId = location.userId;
            console.log('userId', userId)


         return User.findOne({
         	where: {
         		id: userId
         	}
         }) 
     })
         .then(user => {
         	locationInfo.user = user.userInfo
         	res.json(locationInfo)

         })  
        .catch(next);

})

//DELETE LOCATION
router.delete('/:locationId', function(req, res, next){
	Location.destroy({
		where: {
			id: req.params.locationId
		}
	})
	.then(() => {
		res.status(200).send()
	})
})

//EDIT LOCATION

router.put('/:locationId', function(req, res, next){
	Location.findOne({
		where: {
			id: req.params.locationId,
		}
	})
	.then(location => {
		return location.update(req.body)
	})
	.then(updatedlocation => {
		res.json(updatedlocation)
	})
})


//ADD ACTIVITY
router.post('/:locationId/activity', function(req, res, next){
	return Activity.create({
		name: req.body.name, 
		stars: req.body.stars,
		comments: req.body.comments,
		// locationId: req.params.locationId
	})
	.then(activity => {
		return activity.setLocation(req.params.locationId)
	})
	.then(activity => {
		res.json(activity)
	})
	.catch(next)
})

//ADD ACCOMADTION
router.post('/:locationId/accomadation', function(req, res, next){
	return Accomadation.create({
		name: req.body.name, 
		stars: req.body.stars,
		comments: req.body.comments,
		// locationId: req.params.locationId
	})
	.then(accomadation => {
		return accomadation.setLocation(req.params.locationId)
	})
	.then(accomadation => {
		res.json(accomadation)
	})
	.catch(next)
})

//ADD REST
router.post('/:locationId/restaurant', function(req, res, next){
	return Restaurant.create({
		name: req.body.name, 
		stars: req.body.stars,
		comments: req.body.comments,
		// locationId: req.params.locationId
	})
	.then(restaurant => {
		console.log('rest ', restaurant)
		return restaurant.setLocation(req.params.locationId)
	})
	.then(restaurant => {
		res.json(restaurant)
	})
	.catch(next)
})



//EDIT ACTIVITY
router.put('/:locationId/activity/:activityId', function(req, res, next){
	return Activity.findOne({
		where: {
			id: req.params.activityId
		}
	})
	.then(activity => {
		return activity.update(req.body)
	})
	.then(updatedactivity => {
		res.json(updatedactivity)
	})
	.catch(next)
})
//EDIT ACCOMATION
router.put('/:locationId/accomadation/:accomadationId', function(req, res, next){
	return Accomadation.findOne({
		where: {
			id: req.params.accomadationId
		}
	})
	.then(accomadation => {
		return accomadation.update(req.body)
	})
	.then(updatedaccomadation => {
		res.json(updatedaccomadation)
	})
	.catch(next)
})
//EDIT REST
router.put('/:locationId/restaurant/:restaurantId', function(req, res, next){
	return restaurant.findOne({
		where: {
			id: req.params.restaurantId
		}
	})
	.then(restaurant => {
		return restaurant.update(req.body)
	})
	.then(updatedrestaurant => {
		res.json(updatedrestaurant)
	})
	.catch(next)
})

//DELETE ACTIVITY
router.delete('/:locationId/activity', function(req, res, next){
	Activity.destroy({
		where: {
			id: req.body.activityId
		}
	})
	.then(() => {
		res.status(200).send()
	})
})
//DELETE ACCOMATION
router.delete('/:locationId/accomadation', function(req, res, next){
	Accomadation.destroy({
		where: {
			id: req.params.accomadationId
		}
	})
	.then(() => {
		res.status(200).send()
	})
})
//DELETE REST
router.delete('/:locationId/restaurant', function(req, res, next){
	Restaurant.destroy({
		where: {
			id: req.params.restaurantId
		}
	})
	.then(() => {
		res.status(200).send()
	})
})






module.exports = router;
