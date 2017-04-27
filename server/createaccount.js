var express = require('express');
var router = express.Router();
var {   db, User, Location, ProfilePhoto, LocationPhoto, Activity, Restaurant, Accomadation, LocationFriendship, Friend } = require('../db/index');
var Promise = require('bluebird');
var fs = require('fs');





// /api/createaccount
router.post('/', (req, res, next) => {
    console.log('this is the info', req.body.createaccountInfo)
     const {first_name, last_name, password, birthday, gender, email} = req.body.createaccountInfo
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

                    email: email,
                    first_name: first_name,
                    last_name: last_name,
                    password: password,
                    birthday: birthday,
                    gender: gender,
                    
                    

                })

            }
        })



    .then(user => {
            req.session.user = user.userInfo
            res.json(user.userInfo)
    })
    .catch(err => console.error(err))
})


    

    







module.exports = router;
