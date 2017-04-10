var express = require('express');
var router = express.Router();
var { db, User, Location } = require('../db/index')
var Promise = require('bluebird');


router.get('/:locationId', function(req, res, next) {
    Location.findOne({
            where: {
                id: req.params.locationId
            }
        })
        .then(location => {
            res.render("location", { location })

        })
        .catch(next);

})




module.exports = router;
