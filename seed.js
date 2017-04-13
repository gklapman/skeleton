var Promise = require('bluebird');
var {   db, User, Location, ProfilePhoto, LocationPhoto, Activity, Restaurant, Accomadation, LocationFriendship, Friend } = require('./db/index');


var data = {
    users: [
        { email: 'gabiklapman@gmail.com', password: "password1", first_name: "Gabi", last_name: "Klapman", current_city: "Chicago", user_pic: "this will be a pic", gender: "female" },
        { email: 'sethklapman@gmail.com', password: "password2", first_name: "Seth", last_name: "Klapman", current_city: "Ann Arbor", user_pic: "this will be a pic", gender: "male" },
        {  email: 'kylklapman@gmail.com', password: "password3", first_name: "Kyle", last_name: "Klapman", current_city: "Naples", user_pic: "this will be a pic", gender: "male" },
        {  email: 'scottklapman@gmail.com', password: "password4", first_name: "Scott", last_name: "Klapman", current_city: "Oak Park", user_pic: "this will be a pic", gender: "male" },



    ],
    locations: [
        {  city: "Madrid", overall_review: "It was awesome", photos: ["these will be photos"], reviews: ["hotel review, blah blah blah"], userId: 1 },
        {  city: "Berlin", overall_review: "It was great", photos: ["these will be photos"], reviews: ["hotel review, blah blah blah"], userId: 3 },
        {  city: "Dubai", overall_review: "It was incredible", photos: ["these will be photos"], reviews: ["hotel review, blah blah blah"], userId: 2 },
        {  city: "Bali", overall_review: "It was amazing", photos: ["these will be photos"], reviews: ["hotel review, blah blah blah"], userId: 1 },

    ],
    // friends: [
    //     { status: 'approved', user_1Id: 1, user_2Id: 2},
    //     { status: 'approved', user_1Id: 2, user_2Id: 3},
    //     { status: 'pending', user_1Id: 4, user_2Id: 2},
    // ], 
    profilePics: [
        { filepath: '2984sf83', userId: 1},
        { filepath: '2984ssdff83', userId: 2},
        { filepath: '2984sfgfd83', userId: 1},
        { filepath: '2984sa3f83', userId: 1},
    ],
    activities: [
        { name: 'bungee jump extreme', stars: 5, comments: 'crazyyyy', locationId: 1},
        { name: 'castle', stars: 4, comments: 'beautiful', locationId: 2},
        { name: 'scuba dive pro shop', stars: 5, comments: 'great experience', locationId: 3},
        { name: 'palace', stars: 4, comments: 'Great tour guide', locationId: 3}
    ],
    restaurants: [
        { name: 'Blue Garden', stars: 5, comments: 'AMAZING', locationId: 2},
        { name: 'Olives and Wine', stars: 4, comments: 'great views', locationId: 3},
        { name: 'Baha Beach', stars: 5, comments: 'great service', locationId: 4},
        { name: 'El Jefe', stars: 4, comments: 'the paella was amazing', locationId: 1}
    ],
    accomadations: [
        { name: 'The Place', stars: 5, comments: 'large rooms', locationId: 2},
        { name: 'Holiday Inn', stars: 4, comments: 'beautiful', locationId: 4},
        { name: 'Hotel Casa', stars: 5, comments: 'great experience', locationId: 2},
        { name: 'El Sol', stars: 5, comments: 'great location', locationId: 1}
    ],

};






db.sync({ force: true })
    .then(function() {
        console.log("Created tables, now inserting data");
        const creatingUsers = Promise.map(data.users, user => {
            return User.create(user);
        })
        const creatingLocations = Promise.map(data.locations, location => {
            return Location.create(location)
        })
        // const creatingFriendships= Promise.map(data.friends, friendship => {
        // return Friend.create(friendship)
        // });
        const creatingProfilePics= Promise.map(data.profilePics, pic => {
        return ProfilePhoto.create(pic)
        });
        const creatingActivities= Promise.map(data.activities, activity => {
        return Activity.create(activity)
        });
         const creatingAccomadations= Promise.map(data.accomadations, accomadation => {
        return Accomadation.create(accomadation)
        });
          const creatingRestaurants= Promise.map(data.restaurants, restaurant => {
        return Restaurant.create(restaurant)
        });
        return Promise.all([creatingUsers, creatingLocations, creatingProfilePics, creatingActivities, creatingAccomadations, creatingRestaurants])
    })
    .then(() => {
        console.log("finished adding data")
    })
    .catch(function(err) {
        console.error("Uh oh, there was an error ", err)
    })
    .finally(() => {
        db.close();
        return null;
    })

