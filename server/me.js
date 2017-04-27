 var express = require('express');
var router = express.Router();
var {   db, User, Location, ProfilePhoto, LocationPhoto, Activity, Restaurant, Accomadation, LocationFriendship, Friend } = require('../db/index');
var Promise = require('bluebird');

router.get('/', function(req, res, next){
  if (req.session.user){
  let userId = req.session.user.id
  User.findOne({
    where: {
      id: userId
    }
  })
  .then(user => {
    res.status(200).send(user.userInfo)  

  })
  .catch(next)
  }
  else {
    res.status(200).send({})
  }
})

router.post('/logout', function(req, res, next){
  req.session.destroy()
  res.send(req.session)
  
})

module.exports = router;