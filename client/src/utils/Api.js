import axios from 'axios';
/* TODO: validate api calls' syntax */
export default {

    // Sign up
    signUp: function(data) {
        return axios.post("/api/signup", data )
            .catch( err => console.log(err.response));
    },

    signIn: function(data) {
        console.log('in Api.js signIn data', data);
        return axios.post("/api/signin/", data )
            .catch( err => console.log(err.response));
    },

    // Get all pictures for event
    getEventPics: function() {
        return axios.get("/event/pics");
    },

    // Get all events (list)
    getEvents: function(data) {
        console.log('in api.getEvents user email ', data);
        //return axios.get("/events", data);
        return axios.get(`/event/?email=${data}`);
    },

    getEventsByUserEmail: function(data){
        return axios.get(`/events/user/${data}`)
    },
    // Create event
    createEvent: function(data) {
        return axios.post("/events/newevent", data)
    },

    // Upload picture
    uploadPic: function(data) {
        const config = {
            headers: {
                'content-type': 'multipart/form-data'
            }
        }
        return axios.post("/uploadpic", data, config);
    }, 

    // Load Events
    loadAllEvents: function() {
        return axios.get("/events/allevents")
    },

    // Get event subscription status
    getSubStatus: function(/* Logged in user info here */) {
        return axios.get("/api/substatus")
    },

    // Subscribe a user to an event based on their email address and event ID
    /* TODO: verify api routes are valid syntax */
    subscribe: function( data ) {
        return axios.post("/api/subscribe/:id", data)
    },

    // Load specific event
    loadSingleEvent: function( data ) {
        console.log('in Api.js - loadSingleEvent ', data);
        return axios.get(`/events/event/${data}`);
    },

    // Load images uploaded by one person
    getMyPics: function( data ) {
        return axios.get("/events/event/:event_id/pictures", data)
    },

    // Is auth
    isAuth: function() {
        return axios.get("/auth/isauth")
    }
}