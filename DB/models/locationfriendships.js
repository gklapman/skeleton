const Sequelize = require('sequelize');
const db = require('../db');


var LocationFriendship = db.define('locationfriendship', {
	id: {
		type: Sequelize.INTEGER, 
		primaryKey: true, 
	}, 
	status: {
		type: Sequelize.ENUM('pending', 'approved', 'blocked')
	}
})

module.exports = LocationFriendship