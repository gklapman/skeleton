var express = require('express');
var router = express.Router();
var {   db, User, Location, ProfilePhoto, LocationPhoto, Activity, Restaurant, Accomadation, LocationFriendship, Friend } = require('../db/index');
var Promise = require('bluebird');
var fs = require('fs');





// /api/createaccount
router.post('/', (req, res, next) => {
    console.log('inside of router post with this body ', req.body)

    //WILL WANT TO CHECK IF EMAIL ALREADY EXISTS
    return User.findOne({
            where: {
                email: req.body.email
            }
        })
        .then(user => {
            if (user) {
                res.send('Sorry, this email is already registered')
                    // CAN I ADD SOMETHING HERE WITH RESPOND WITH THE VALIDATION EMAIL
            } else {
                return User.create({

                    email: req.body.email,
                    first_name: req.body.first_name,
                    last_name: req.body.last_name,
                    // password: req.body.password,
                    birthday: req.body.birthday,
                    gender: req.body.gender,
                    current_city: req.body.current_city,
                    

                })

            }
        })



    .then(user => {
            res.json(user)
    })
    .catch(next)
})


    

    







module.exports = router;
