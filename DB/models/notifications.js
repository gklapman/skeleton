const Sequelize = require('sequelize');
const db = require('../db');

const Notification = db.define('notification', {
	type: {
		type: Sequelize.ENUM('buddy request', 'photo comment'),
	}, 
	user1Id: {
		type: Sequelize.INTEGER, 
		allowNull: false, 
	}, 
	user2Id: {
		type: Sequelize.INTEGER, 
		allowNull: false, 
	}

})

module.exports = Notification