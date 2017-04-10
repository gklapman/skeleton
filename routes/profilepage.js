var express = require('express');
var router = express.Router();
var { db, User, Location } = require('../db/index')
var Promise = require('bluebird');



// GET /users
// router.get('/', function(req, res, next) {

//     User.findAll()
//         .then(function(users) {
//             res.render('users', {
//                 users: users
//             });
//         })
//         .catch(next);

// });

// GET /users/id
router.get('/:userId', function(req, res, next) {
    console.log('id', req.params.userId)

    var findUserLocations = Location.findAll({
        where: {
            userId: req.params.userId
        }
    });

    var findUserInfo = User.findOne({
        where: {
            id: req.params.userId
        }
    })

    Promise.all([
            findUserInfo, findUserLocations
        ])
        // can also be .spread(pages, user)
        .then(function(values) {

            var user = values[0];
            var locations = values[1];



            res.render('userpage', {
                user,
                locations
            });

        })
        .catch(next);

});

router.get('/:userId/add', function(req, res, next) {
    res.render('addlocation')
})

module.exports = router;
