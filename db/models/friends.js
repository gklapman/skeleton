const Sequelize = require('sequelize');
const db = require('../db');

const Friend = db.define('friend', {
	id: {
		type: Sequelize.INTEGER,
		primaryKey: true
	},
	status: {
		type: Sequelize.ENUM('pending', 'approved', 'blocked'),//0 pending travelbuddy request, 1 accepted request, 2 blocked?
		allowNull: false,
	}, 
})

module.exports = Friend