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
        allowNull: false
    },

    user_pic: {
        type: Sequelize.STRING /* THIS WILL NEED TO BE CHANGED TO THEIR PROF PIC AND PUT IN A PLACEHOLDER PIC IF THEY DONT HAVE ONE*/
    },
    birthday: {
        type: Sequelize.DATE
    },
    gender: {
        type: Sequelize.ENUM('male', 'female') /*SHOULD I ADD MORE CHOICES?*/
    },
    role: {
        type: Sequelize.ENUM('admin', 'general', 'disabled'),
        defaultValue: 'general'
    },

    


    //     // }, {
    //     //     hooks: {
    //     //         beforeValidate: function(page) {
    //     //             if (page.title) {
    //     //                 page.urlTitle = page.title.replace(/\s+/g, '_').replace(/\W/g, '');
    //     //             }
    //     //         }
    //     //     },
    //     //     getterMethods: {
    //     //         route: function() {
    //     //             return '/wiki/' + this.urlTitle;
    //     //         },
    //     //         renderedContent: function() {
    //     //             return marked(this.content);
    //     //         }
    //     //     },
    //     //     classMethods: {
    //     //         findByTag: function(tag) {
    //     //             return Page.findAll({
    //     //                 where: {
    //     //                     tags: {
    //     //                         $overlap: [tag]
    //     //                     }
    //     //                 }
    //     //             });
    //     //         }
    //     //     },
    //     //     instanceMethods: {
    //     //         findSimilar: function() {
    //     //             return Page.findAll({
    //     //                 where: {
    //     //                     tags: {
    //     //                         $overlap: this.tags
    //     //                     },
    //     //                     id: {
    //     //                         $ne: this.id
    //     //                     }
    //     //                 }
    //     //             });
    //     //         }
    //     //     }
});






module.exports = User
