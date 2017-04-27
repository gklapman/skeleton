const Sequelize = require('sequelize');
const db = require('../db');


var User = db.define('user', {
    email: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
        validate: {
            isEmail: true
        }


    },
    password: {
        type: Sequelize.STRING,
        allowNull: false,
    },

    // password_hash: DataTypes.STRING,
    // password: {
    //     type: DataTypes.VIRTUAL,
    //     set: function(val) {
    //         this.setDataValue('password', val); // Remember to set the data value, otherwise it won't be validated
    //         this.setDataValue('password_hash', this.salt + val);
    //     },
    //     validate: {
    //         isLongEnough: function(val) {
    //             if (val.length < 7) {
    //                 throw new Error("Please choose a longer password")
    //             }
    //         }
    //     }
    // },
    
    first_name: {
        type: Sequelize.STRING(20),
        allowNull: false
    },
    last_name: {
        type: Sequelize.STRING(30),
        allowNull: false
    },
    current_city: {
        type: Sequelize.STRING,
        /*this will be need to be a city*/
    },

    birthday: {
        type: Sequelize.DATE
    },
    gender: {
        type: Sequelize.ENUM('male', 'female') /*SHOULD I ADD MORE CHOICES?*/
    },
    role: {
        type: Sequelize.ENUM('admin', 'general', 'disabled'), //NEED TO MAKE THIS SO ITS NOT EDITABLE BY REGULAR PEOPLE
        defaultValue: 'general'
    }
}, {
        getterMethods: {
            userInfo: function(){
                let userInfo = {
                    first_name: this.first_name,
                    last_name: this.last_name,
                    gender: this.gender,
                    current_city: this.current_city,
                    birthday: this.birthday,
                    id: this.id
                }
                return userInfo
            }
        }
    }

);






module.exports = User
