//create a post request for photo
var express = require('express');
var router = express.Router();
var { db, User, Location, Photo } = require('../db/index')
var Promise = require('bluebird');
var fs = require('fs');

promisifiedWriteFile = function(filename, filecontents) {
    return new Promise(function(resolve, reject) {
        fs.writeFile(filename, filecontents, 'binary', function(err, str) { //most likely binary
            if (err) reject(err);
            else resolve(str);
        });
    });
};

router.post('/', (req, res, next) => {
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

    dbPromise = Photo.create({
        filepath: './photos' + idletters + '.jpg'

    })

    Promise.all(filePromise, dbPromise)
        .spread((file, photo) => {
            console.log('file', file)
            res.send(photo)
        })

});






module.exports = router;
