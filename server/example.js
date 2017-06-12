 var express = require('express');
var router = express.Router();
var {   db, Example} = require('../db/index');
var Promise = require('bluebird');

router.get('/', function(req, res, next){
  Example.findAll({})
  .then(allInfo => {
    res.json(allInfo)
  })
  .catch(next)
})

module.exports = router;