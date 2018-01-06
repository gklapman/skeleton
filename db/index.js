var db = require('./db')
var Sequelize = require('sequelize')
var Example = require('./models/example')


console.log('creating a DB')
//FIRST TABLE HAS THE MAGIC KEY

// User.belongsToMany(User, {
//     as: 'user2',
//     through: {
//         model: Notification, 
//     },
//     foreignKey: 'user1Id'
// })

db.sync({force: true})
.then(function () {
    console.log('db synced')
})


module.exports = {
    db,
    Example
}
