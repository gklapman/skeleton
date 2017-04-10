var express = require('express');
var router = express.Router();
var { db, User, Location } = require('../db/index')
var Promise = require('bluebird');

router.get('/', (req, res, next) => {
    res.render("createaccount")
})

router.post('/', (req, res, next) => {

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
                User.create({

                    email: req.body.email,
                    first_name: req.body.first_name,
                    last_name: req.body.last_name,
                    birthday: req.body.birthday,
                    gender: req.body.gender,
                    current_city: req.body.current_city,
                    user_pic: req.body.user_pic,


                })

            }
        })



    .then(() => {
            res.redirect('/travelfeed')
        })
    .catch(next)
})






module.exports = router;
