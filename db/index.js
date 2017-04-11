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
    // var Location = require('./models/location');
    // var Sequelize = require('sequelize')

// Location.belongToMany(User)
// User.belongsToMany(Location)

// Location.belongsTo(User)
// DB Layer FK on location. ORM layer: 1-1 relationship
// Location.addUser
// Location.setUser

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

User.belongsToMany(User, {
    as: 'user1', //this is the user inside parens
    through: {
        model: Friend, 
    },
    foreignKey: 'user_2Id',
})



Location.belongsToMany(Friend, {
    through:  
    {model: LocationFriendship}   
})

Location.hasMany(Accomadation)
Location.hasMany(Activity)
Location.hasMany(Restaurant)

// Location.belongsToMany(Location, {
// 	as: 'user_2_location',
// 	through: {
// 		model: Friend
// 	}, 
// 	foreignKey: 'user_1_locationId'
// })



// Post.belongsToMany(Tag, {
//   through: {
//     model: ItemTag,
//     unique: false,
//     scope: {
//       taggable: 'post'
//     }
//   },
//   foreignKey: 'taggable_id',
//   constraints: false
// });
// Tag.belongsToMany(Post, {
//   through: {
//     model: ItemTag,
//     unique: false
//   },
//   foreignKey: 'tag_id',
//   constraints: false
// });



// User.hasMany(Location); // DB layer FK on Location. ORM layer: 1-many relationship
// User.addLocation
// User.getlocations
// User.setLocation
// User.addLoications
// User.setLocations

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
