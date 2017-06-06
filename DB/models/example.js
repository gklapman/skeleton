const Sequelize = require('sequelize');
const db = require('../db');


var Example = db.define('example', {
    name: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,

    },
    age: {
        type: Sequelize.INTEGER,
        allowNull: false,
    }
}, {
        getterMethods: {
            nameAndAge: function(){
                return this.name + " is " + this.age
            }
        }
    }

);






module.exports = Example
