var express = require('express');
var router = express.Router();
var {   db, User, Location, ProfilePhoto, LocationPhoto, Activity, Restaurant, Accomadation, LocationFriendship, Friend } = require('../db/index');
var Promise = require('bluebird');

promisifiedWriteFile = function(filename, filecontents) {
    return new Promise(function(resolve, reject) {
        fs.writeFile(filename, filecontents, 'binary', function(err, str) { //most likely binary
            if (err) reject(err);
            else resolve(str);
        });
    });
};

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
                    status: 'approved',
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
            userId: req.body.userId //should I put this on the params... make the route redirect to include userId
        
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
router.post('/:userId/uploadprofilepicture', function (req, res, next){
    let userId = req.params.userId
    console.log('inside correct post function')

    console.log(req.body) //Buffer binary information

    function makeid() {
        var text = "";
        var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

        for (var i = 0; i < 10; i++)
            text += possible.charAt(Math.floor(Math.random() * possible.length));

        return text;
    }

    let idletters = makeid();

    // filePromise = promisifiedWriteFile('./photos' + idletters + '.jpg', req.body.pic)
    filePromise = promisifiedWriteFile('images.jpg', req.body.pic)

    dbPromise = ProfilePhoto.create({
        filepath: './photos' + idletters + '.jpg',
        UserId: userId,

    })
    })



module.exports = router;





