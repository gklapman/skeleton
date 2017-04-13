const Sequelize = require('sequelize');
const db = require('../db');



var Location = db.define('location', {
    city: {
        type: Sequelize.STRING,
        /* NEED TO MAKE THIS VALIDATE ITS A CITY*/
        allowNull: false
    },
    overall_review: {
        type: Sequelize.TEXT
    },
    starting_date: {
        type: Sequelize.DATE
    }, 
    ending_date: {
        type: Sequelize.DATE,
    },

});



module.exports = Location
