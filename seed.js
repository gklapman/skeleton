var Promise = require('bluebird');
var {   db, User, Location, ProfilePhoto, LocationPhoto, Activity, Restaurant, Accomadation, LocationFriendship, Friend, Notification, TravelFeed } = require('./db/index');


var data = {
    users: [
        { email: 'gabiklapman@gmail.com', password: "1", first_name: "Gabi", last_name: "Klapman", current_city: "Chicago", user_pic: "this will be a pic", gender: "female", lat: 41.9, lng: -87},
        { email: 'sethklapman@gmail.com', password: "1", first_name: "Seth", last_name: "Klapman", current_city: "Ann Arbor", user_pic: "this will be a pic", gender: "male", lat: 42.3, lng: -83 },
        {  email: 'kyleklapman@gmail.com', password: "1", first_name: "Kyle", last_name: "Klapman", current_city: "Naples", user_pic: "this will be a pic", gender: "male", lat: 26.4, lng: -81.5 },
        {  email: 'beckyklapman@gmail.com', password: "1", first_name: "Becky", last_name: "Klapman", current_city: "Oak Park", user_pic: "this will be a pic", gender: "female", lat: 26.4, lng: -81.5 },
        {  email: 'deanklapman@gmail.com', password: "1", first_name: "Dean", last_name: "Klapman", current_city: "Oak Park", user_pic: "this will be a pic", gender: "male", lat: 26.4, lng: -81.5 },



    ],

    locationsPhotos: [
    {filepath: "https://travelapp1234.s3.amazonaws.com/149359264652110170838_10152387401152953_2367783362630725337_n.jpg", locationId: 1},
    {filepath: "https://travelapp1234.s3.amazonaws.com/149359277969210167956_10152387401342953_8025143427897339808_n.jpg", locationId: 1},
    {filepath: "https://travelapp1234.s3.amazonaws.com/14935927896011492153_10152751297164129_4599348726282763310_o.jpg", locationId: 1},
    {filepath: "https://travelapp1234.s3.amazonaws.com/149359280458610275533_10152830268144129_670509726854296356_o.jpg", locationId: 1},
    ],

    locations: [
        {  city: "Sevilla", overall_review: "What a beautiful city. You can truely feel the Spanish culture as you explore. I would definitely recommend going and would love to expand more- if you're interested feel free to reach out", photos: ["these will be photos"], reviews: ["hotel review, blah blah blah"], userId: 1, lat: 37.3891, lng: -5.9845 },
        {  city: "New York City", overall_review: "It was great", photos: ["these will be photos"], reviews: ["hotel review, blah blah blah"], userId: 1, lat: 40.7128, lng: -74.0059 },
        {  city: "Dubai", overall_review: "It was incredible", photos: ["these will be photos"], reviews: ["hotel review, blah blah blah"], userId: 1, lat: 25.2048, lng: 55.2708 },
        {  city: "Bali", overall_review: "It was amazing", photos: ["these will be photos"], reviews: ["hotel review, blah blah blah"], userId: 1, lat: -8.3405, lng: 115.0920 },
        {  city: "Cape Town", overall_review: "It was amazing", photos: ["these will be photos"], reviews: ["hotel review, blah blah blah"], userId: 1, lat: -33, lng: 18 },
        {  city: "Hong Kong", overall_review: "It was amazing", photos: ["these will be photos"], reviews: ["hotel review, blah blah blah"], userId: 2, lat: 23, lng: 114 },
        {  city: "Lima", overall_review: "It was amazing", photos: ["these will be photos"], reviews: ["hotel review, blah blah blah"], userId: 3, lat: -12, lng: -77 },
        {  city: "Rome", overall_review: "It was amazing", photos: ["these will be photos"], reviews: ["hotel review, blah blah blah"], userId: 4, lat: -52, lng: 27 },
        {  city: "Singapore", overall_review: "It was amazing", photos: ["these will be photos"], reviews: ["hotel review, blah blah blah"], userId: 2, lat: 1, lng: 103 },
        {  city: "Barcelona", overall_review: "It was amazing", photos: ["these will be photos"], reviews: ["hotel review, blah blah blah"], userId: 2, lat: 41, lng: -2 },
        {  city: "Athens", overall_review: "It was amazing", photos: ["these will be photos"], reviews: ["hotel review, blah blah blah"], userId: 4, lat: 37, lng: 23 },
        {  city: "Charlotte", overall_review: "It was amazing", photos: ["these will be photos"], reviews: ["hotel review, blah blah blah"], userId: 2, lat: 35, lng: -80 },
        {  city: "Denver", overall_review: "It was amazing", photos: ["these will be photos"], reviews: ["hotel review, blah blah blah"], userId: 5, lat: 39, lng: -105 },
        {  city: "Key West", overall_review: "It was amazing", photos: ["these will be photos"], reviews: ["hotel review, blah blah blah"], userId: 1, lat: 24, lng: -81 },
        {  city: "Las Vegas", overall_review: "It was amazing", photos: ["these will be photos"], reviews: ["hotel review, blah blah blah"], userId: 3, lat: 36, lng: -115 },
        {  city: "Minneapolis", overall_review: "It was amazing", photos: ["these will be photos"], reviews: ["hotel review, blah blah blah"], userId: 4, lat: 44, lng: -87 },

    ],
    profPhotos: [
        { filepath: 'https://s3.amazonaws.com/travelapp1234/1493524709566thailand.jpg', userId: 1,},
        { filepath: 'https://s3.amazonaws.com/travelapp1234/1493606434387kyleprof.jpg', userId: 3,},
        { filepath: 'https://s3.amazonaws.com/travelapp1234/149360632629116584010_1122684851186813_7911369010938118144_n.jpg', userId: 5,}
       
    ], 
      notifications: [
        { type: 'photo comment', user1Id: 1, user2Id: 2},
        { type: 'photo comment', user1Id: 1, user2Id: 3},
        { type: 'photo comment', user1Id: 1, user2Id: 5},
       
    ], 
    
    activities: [
        { name: 'bungee jump extreme', stars: 5, comments: 'crazyyyy', locationId: 3},
        { name: 'castle', stars: 4, comments: 'beautiful', locationId: 2},
        { name: 'Plaza De Espana', stars: 5, comments: 'A wonderful piece of the city showcasing incredible spanish architecture. Local musicians played while we enjoyed our time checking out the details of the magnificient attraction', locationId: 1},
        { name: 'Metropol Parasol', stars: 4, comments: 'Great views of Sevilla from the top. We had a drink and enjoyed the sunset. There were no lines and tickets were cheap. I would definitely recommend it', locationId: 1}
    ],
    restaurants: [
        { name: 'Blue Garden', stars: 5, comments: 'AMAZING', locationId: 2},
        { name: 'Olives and Wine', stars: 4, comments: 'great views', locationId: 3},
        { name: 'Baha Beach', stars: 5, comments: 'great service', locationId: 4},
        { name: 'El Jefe', stars: 4, comments: 'The Paella was great! The atmosphere was relaxing and authentic. The service was a bit slow (though, that was pretty typical of Sevilla)', locationId: 1}
    ],
    accomadations: [
        { name: 'The Place', stars: 5, comments: 'large rooms', locationId: 2},
        { name: 'Holiday Inn', stars: 4, comments: 'beautiful', locationId: 4},
        { name: 'Hotel Casa', stars: 5, comments: 'great experience', locationId: 2},
        { name: 'El Sol', stars: 5, comments: 'The location is incredible. Right in the heart of the city. The staff was extremley friendly and the rooms were large and clean.', locationId: 1}
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
       
        const creatingActivities= Promise.map(data.activities, activity => {
        return Activity.create(activity)
        });
         const creatingAccomadations= Promise.map(data.accomadations, accomadation => {
        return Accomadation.create(accomadation)
        });
          const creatingRestaurants= Promise.map(data.restaurants, restaurant => {
        return Restaurant.create(restaurant)
        });
        const creatingLocationPics= Promise.map(data.locationsPhotos, pic => {
        return LocationPhoto.create(pic)
        });
         const creatingProfPhotos= Promise.map(data.profPhotos, photo => {
        return ProfilePhoto.create(photo)
        });
           const creatingnotifications= Promise.map(data.notifications, noti => {
        return Notification.create(noti)
        });
        return Promise.all([creatingUsers, creatingLocations, creatingLocationPics, creatingActivities, creatingAccomadations, creatingRestaurants, creatingnotifications])
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

