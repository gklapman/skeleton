var express = require('express');
var router = express.Router();
var {   db, User, Location, ProfilePhoto, LocationPhoto, Activity, Restaurant, Accomadation, LocationFriendship, Friend, Notification, TravelFeed } = require('../db/index');
var Promise = require('bluebird');



// /api/travelpage/
router.get('/:userId', function(req, res, next) {
    let userInfo;
    
    var findUserLocations = Location.findAll({
        where: {
            userId: req.params.userId
        }
    });

    var findUserInfo = User.findOne({
        where: {
            id: req.params.userId
        }
    });

    var findingProfilePicture = ProfilePhoto.findOne({
        where: {
            userId: req.params.userId
        }, 
        order: [['updatedAt', 'DESC']]
    })


    Promise.all([findUserInfo, findUserLocations, findingProfilePicture])

        .spread((user, userlocations, profilepic) => {

            userInfo = user.userInfo;
            userInfo.locations = userlocations;
            userInfo.profilepic = profilepic;
    
            return Friend.findAll({
                where: {
                    $or: [
                        {user2Id: req.params.userId},
                        {user1Id: req.params.userId},      
                    ]
                }, 
                // include: [{model: User, as: 'user2'}, {model: User, as: 'user1'}]
            })
        })
        .then(friends => {
            userInfo.friends = friends
            res.json(userInfo)
        })

        .catch(next);

});

//add friend

router.post('/:userId/addbuddy', function (req, res, next){
    if (req.params.userId !== req.body.buddyId){
    return Friend.create({
        user1Id: req.params.userId,
        user2Id: req.body.buddyId,
        status: 'pending'
    })
    .then(buddyrequest => {
        return Notification.create({
            user1Id: req.body.buddyId,
            user2Id: req.params.userId,
            type: "buddy request"
        })
    })
    .then(notification => {
        res.json(notification)
    })
    .catch(err => console.log(err))
    } else {
        res.send('you can not request yourself')
    }
    
})

router.get('/:userId/profilepics', function (req, res, next){
    ProfilePhoto.findAll({
        where: {
            userId: req.params.userId,
        }, 
        order: [['updatedAt', 'DESC']],    
    })
    .then(photos => {
        res.json(photos)
    })
    .catch(next)
})


router.post('/addlocation', function(req, res, next){ //req.body should include the userinfo as current User
    console.log('body', req.body)
    Location.create({
       
            city: req.body.city,
            starting_date: req.body.starting_date,
            ending_date: req.body.ending_date,
            overall_review: req.body.overall_review,
            userId: req.body.userId, //should I put this on the params... make the route redirect to include userId
            lat: req.body.lat, 
            lng: req.body.lng
    })
    .then(location => {
        res.json(location)
    })
    .catch(next)
})

//EDIT PROFILE

router.put('/:userId', function(req, res, next){
    return User.findOne({
        where: {
            id: req.params.userId
        }
    })
    .then(user => {
        return user.update(req.body)
    })
    .then(user => {
        res.json(user)
    })
    .catch(next)

})

//ADD PROFILE PICTURE

router.post('/addphoto', (req, res, next) => {
    return ProfilePhoto.create({
        filepath: req.body.Url, 
        userId: req.body.userId
    })
    then(profilephoto => {
        res.json(profilephoto)
    })
})




module.exports = router;





