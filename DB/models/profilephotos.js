const Sequelize = require('sequelize');
const db = require('../db');
var fs = require("fs");
var Promise = require('bluebird');



// promisifiedReadFile = function(filename) {
//     return new Promise(function(resolve, reject) {
//         fs.readFile(filename, 'utf-8', function(err, str) {
//             if (err) reject(err);
//             else resolve(str);
//         });
//     });
// };




var ProfilePhoto = db.define('profilephoto', {
    filepath: {
        type: Sequelize.STRING,
        allowNull: false,
    }
})


module.exports = ProfilePhoto
