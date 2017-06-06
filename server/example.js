 var express = require('express');
var router = express.Router();
var {   db, User, Location, ProfilePhoto, LocationPhoto, Activity, Restaurant, Accomadation, LocationFriendship, Friend, Notification } = require('../db/index');
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

router.get('/notifications', (req, res, next) => {
  let response = {};
  let notificationsResponse;
  let userId = req.session.user.id
  return Notification.findAll({
    where: {
      user1Id: userId
    }, 
    order: [['updatedAt', 'DESC']]
  })
  .then(notifications => {
    notificationsResponse = notifications
    let promisedInfo = notifications.map(noti => {
      return (User.findOne({
        where: {
          id: noti.user2Id
        }
      }))
    })
    return Promise.all(promisedInfo)
  })
  .then(userInfo => {
    response.userInfo = userInfo
    response.notificationsInfo = notificationsResponse
    res.json(response)
  })

})

module.exports = router;