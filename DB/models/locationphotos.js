const Sequelize = require('sequelize');
const db = require('../db');



var LocationPhoto = db.define('locationphoto', {
    filepath: {
        type: Sequelize.STRING,
        allowNull: false,
    }
})


module.exports = LocationPhoto
