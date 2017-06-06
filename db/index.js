var db = require('./db')
var Sequelize = require('sequelize')
var Example = require('./models/example')



//FIRST TABLE HAS THE MAGIC KEY

// User.belongsToMany(User, {
//     as: 'user2',
//     through: {
//         model: Notification, 
//     },
//     foreignKey: 'user1Id'
// })




module.exports = {
    db,
    Example
}
