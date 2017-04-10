var db = require('./db')
var User = require('./models/user')
var Location = require('./models/location')
var Photo = require('./models/photos')
    // var Location = require('./models/location');
    // var Sequelize = require('sequelize')

// Location.belongToMany(User)
// User.belongsToMany(Location)

// Location.belongsTo(User)
// DB Layer FK on location. ORM layer: 1-1 relationship
// Location.addUser
// Location.setUser

User.hasMany(Location)

Location.hasMany(Photo)

//gonna need a join table ... I won't want the same photo in two places (with comments/likes, etc.)

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
    Photo,
}
