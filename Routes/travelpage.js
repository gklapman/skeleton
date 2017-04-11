var express = require('express');
var router = express.Router();
var {   db, User, Location, ProfilePhoto, LocationPhoto, Activity, Restaurant, Hotel, LocationFriendship, Friend } = require('../db/index');
var Promise = require('bluebird');





// GET /travelpage/id
router.get('/:userId', function(req, res, next) {
    let userInfo = {}
    

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


    Promise.all([
            findUserInfo, findUserLocations, findingProfilePicture
        ])
        // can also be .spread(pages, user)
        .then(function(values) {
            console.log('values', values)

            var user = values[0];
            var locations = values[1];
            var profilePic = values[2];


            userInfo.first_name = user.first_name;
            userInfo.last_name = user.last_name;
            userInfo.current_city = user.current_city;
            userInfo.birthday = user.birthday;
            userInfo.gender = user.gender;
            userInfo.locations = locations;
            userInfo.profilePic = profilePic;

    
            return Friend.findAll({
                where: {
                    status: 'approved',
                    $or: [
                        {user_2Id: req.params.userId},
                        {user_1Id: req.params.userId},      
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

router.get('/:userId/add', function(req, res, next) {
    res.send('this will be an add new location page') //button only available for that user
})

module.exports = router;





