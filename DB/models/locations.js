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
        // defaultValue: 'unknown' //can you do this? probably not...
    }, 
    ending_date: {
        type: Sequelize.DATE,
        // defaultValue: 'unknown'
    },

});



// // SQL does not distinguish 1-1 from 1-n.
// // Sequelize does distinguish 1-1 from 1-m but does enforce it


module.exports = Location
