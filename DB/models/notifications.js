const Sequelize = require('sequelize');
const db = require('../db');

const Notification = db.define('notification', {
	id: {
		type: Sequelize.INTEGER,
		primaryKey: true,
		autoIncrement: true, 
	},
	type: {
		type: Sequelize.ENUM('buddy request', 'photo comment'),
	}, 

})

module.exports = Notification