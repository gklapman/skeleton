const Sequelize = require('sequelize');
const db = require('../db');

const TravelFeed = db.define('travelfeed', {
	id: {
		type: Sequelize.INTEGER,
		primaryKey: true,
		autoIncrement: true, 
	},
	info: {
		type: Sequelize.TEXT,
		allowNull: false,
	}, 
})

module.exports = TravelFeed