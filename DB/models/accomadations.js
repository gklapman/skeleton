const Sequelize = require('sequelize');
const db = require('../db');

var Accomadation = db.define('accomadation', {
	name: {
		type: Sequelize.STRING,
		allowNull: false, 
	}, 
	stars: {
		type: Sequelize.INTEGER,
		validate: {
			min: 1,
			max: 5
		}
	},
	comments: {
		type: Sequelize.TEXT,
	}
})

module.exports = Accomadation