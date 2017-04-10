var Promise = require('bluebird');
var { db, User, Location, Photo } = require('./db/index');

var data = {
    users: [
        { id: 1, email: 'gabiklapman@gmail.com', first_name: "Gabi", last_name: "Klapman", current_city: "Chicago", user_pic: "this will be a pic", gender: "female" },
        { id: 2, email: 'sethklapman@gmail.com', first_name: "Seth", last_name: "Klapman", current_city: "Ann Arbor", user_pic: "this will be a pic", gender: "male" },
        { id: 3, email: 'kylklapman@gmail.com', first_name: "Kyle", last_name: "Klapman", current_city: "Naples", user_pic: "this will be a pic", gender: "male" },


    ],
    locations: [
        { id: 1, city: "Madrid", overall_review: "It was awesome", photos: ["these will be photos"], reviews: ["hotel review, blah blah blah"], userId: 1 },
        { id: 2, city: "Berlin", overall_review: "It was great", photos: ["these will be photos"], reviews: ["hotel review, blah blah blah"], userId: 3 },
        { id: 3, city: "Dubai", overall_review: "It was incredible", photos: ["these will be photos"], reviews: ["hotel review, blah blah blah"], userId: 2 },
        { id: 4, city: "Bali", overall_review: "It was amazing", photos: ["these will be photos"], reviews: ["hotel review, blah blah blah"], userId: 1 },

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
        });
        return Promise.all([creatingUsers, creatingLocations])
    })
    .then(() => {
        console.log("finished adding data")
    })
    .catch(function(err) {
        console.log("Uh oh, there was an error ", err)
    })
    .finally(() => {
        db.close();
        return null;
    })
    // .then(function() {
    //     return Location.sync({ force: true });
    // })

// .then(function() {
//     app.listen(3001, function() {
//         console.log('Server is listening on port 3001!');
//     });
// });
