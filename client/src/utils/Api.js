import axios from 'axios';
/* TODO: validate api calls' syntax */
export default {

    // Sign up
    signUp: function(data) {
        return axios.post("/api/signup", data );
    },

    signIn: function(data) {
        console.log('in Api.js signIn data', data);
        return axios.post("/api/signin/", data ).then(function (res) {
            console.log(res);
            console.log("HEY IT WOOOORKED!!!");
        })
        .catch( err => console.log(err.response));
    },

    // Get all pictures for event
    getEventPics: function() {
        return axios.get("/api/pics");
    },

    // Get all events (list)
    getEvents: function() {
        return axios.get("/api/events");
    },

    // Create event
    createEvent: function(/* pass data here */) {
        return axios.post("/api/newevent", /* and here */)
    },

    // Upload picture
    uploadPic: function(/* pass data here */) {
        return axios.post("/api/uploadpics", /* and here */)
    },

    // Load Events
    loadEvents: function() {
        return axios.get("/api/allevents")
    },

    // Get event subscription status
    getSubStatus: function(/* Logged in user info here */) {
        return axios.get("/api/substatus")
    },

    // Subscribe a user to an event based on their email address and event ID
    /* TODO: verify api routes are valid syntax */
    subscribe: function( data ) {
        return axios.post("/api/:id/subscribe", data)
    },

    // Load specific event
    loadSingleEvent: function( data ) {
        return axios.get("/api/:eventId", data )
    },

    // Load images uploaded by one person
    getMyPics: function( data ) {
        return axios.get("/api/:id/pictures", data)
    },

    // Is auth
    isAuth: function() {
        return axios.get("/auth/isauth")
    }
}