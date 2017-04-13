var db = require('./db')
var User = require('./models/user')
var Location = require('./models/locations')
var ProfilePhoto = require('./models/profilephotos')
var Activity = require('./models/activities')
var Accomadation = require('./models/accomadations')
var Friend = require('./models/friends')
var LocationPhoto = require('./models/locationphotos')
var Restaurant = require('./models/restaurants')
var LocationFriendship = require('./models/locationfriendships')
var Sequelize = require('sequelize')


User.hasMany(Location)

Location.hasMany(LocationPhoto)

User.hasMany(ProfilePhoto)
Location.hasMany(LocationPhoto)

User.belongsToMany(User, {
	as: 'user2',
	through: {
		model: Friend, 
	},
	foreignKey: 'user_1Id'
})

// User.belongsToMany(User, {
//     as: 'user1', //this is the user inside parens
//     through: {
//         model: Friend, 
//     },
//     foreignKey: 'user_2Id',
// })



Location.belongsToMany(Friend, {
    through:  
    {model: LocationFriendship}   
})

Accomadation.belongsTo(Location, {onDelete: 'cascade', hooks: true})
Activity.belongsTo(Location, {onDelete: 'cascade', hooks: true})
Restaurant.belongsTo(Location, {onDelete: 'cascade', hooks: true})

//FIRST TABLE HAS THE MAGIC KEY





module.exports = {
    db,
    User,
    Location,
    ProfilePhoto, 
    LocationPhoto, 
    Activity,
    Restaurant, 
    Accomadation, 
    LocationFriendship, 
    Friend
}
