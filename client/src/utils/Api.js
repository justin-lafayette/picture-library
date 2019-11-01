import axios from 'axios';

export default {

    // Sign up
    signUp: function(data) {
        console.log('in api.signUp');
        console.log(data)
        return axios.post("/api/signup", data );
    },

    signIn: function(data) {
        return axios.get("/api/signin/" +  data )
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
}