var Promise = require('bluebird');
var {   db, User, Location, ProfilePhoto, LocationPhoto, Activity, Restaurant, Hotel, LocationFriendship, Friend } = require('./db/index');


var data = {
    users: [
        { id: 1, email: 'gabiklapman@gmail.com', first_name: "Gabi", last_name: "Klapman", current_city: "Chicago", user_pic: "this will be a pic", gender: "female" },
        { id: 2, email: 'sethklapman@gmail.com', first_name: "Seth", last_name: "Klapman", current_city: "Ann Arbor", user_pic: "this will be a pic", gender: "male" },
        { id: 3, email: 'kylklapman@gmail.com', first_name: "Kyle", last_name: "Klapman", current_city: "Naples", user_pic: "this will be a pic", gender: "male" },
        { id: 4, email: 'scottklapman@gmail.com', first_name: "Scott", last_name: "Klapman", current_city: "Oak Park", user_pic: "this will be a pic", gender: "male" },



    ],
    locations: [
        { id: 1, city: "Madrid", overall_review: "It was awesome", photos: ["these will be photos"], reviews: ["hotel review, blah blah blah"], userId: 1 },
        { id: 2, city: "Berlin", overall_review: "It was great", photos: ["these will be photos"], reviews: ["hotel review, blah blah blah"], userId: 3 },
        { id: 3, city: "Dubai", overall_review: "It was incredible", photos: ["these will be photos"], reviews: ["hotel review, blah blah blah"], userId: 2 },
        { id: 4, city: "Bali", overall_review: "It was amazing", photos: ["these will be photos"], reviews: ["hotel review, blah blah blah"], userId: 1 },

    ],
    friends: [
        {id: 1, status: 'approved', user_1Id: 1, user_2Id: 2},
        {id: 2, status: 'approved', user_1Id: 2, user_2Id: 3},
        {id: 3, status: 'pending', user_1Id: 4, user_2Id: 2},
    ], 
    profilePics: [
        {id: 1, filepath: '2984sf83', userId: 1},
        {id: 2, filepath: '2984ssdff83', userId: 2},
        {id: 3, filepath: '2984sfgfd83', userId: 1},
        {id: 4, filepath: '2984sa3f83', userId: 1},
    ]
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
        const creatingFriendships= Promise.map(data.friends, friendship => {
        return Friend.create(friendship)
        });
        const creatingProfilePics= Promise.map(data.profilePics, pic => {
        return ProfilePhoto.create(pic)
        });
        return Promise.all([creatingUsers, creatingLocations, creatingFriendships, creatingProfilePics])
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

