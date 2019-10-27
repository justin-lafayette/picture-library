const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 3001;
const app = express();
const body_parser = require('body-parser');

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Define API routes here

// Send every other request to the React app
// Define any API routes before this runs
// app.get("*", (req, res) => {
//   res.sendFile(path.join(__dirname, "./client/build/index.html"));
// });
//const db = require('./client/config/connection');

var database = require("./client/config/connection");

database.authenticate()
.then(() => {console.log('Database connected...');})
.catch((err)=>{console.error('Unable to connect to the database:', err);});


const users = require('./client/models/User');
const pictures = require('./client/models/Pictures');
const video = require('./client/models/Video');
const events = require('./client/models/Events');

users
  .sync()
  .then(() => console.log("Sync successful"))
  .catch(err => {
    "Unable to sync-" + err;
  });

pictures
  .sync()
  .then(() => console.log("Sync successful"))
  .catch(err => {
    "Unable to sync-" + err;
  });

  video
  .sync()
  .then(() => console.log("Sync successful"))
  .catch(err => {
    "Unable to sync-" + err;
  });
  
  events
  .sync()
  .then(() => console.log("Sync successful"))
  .catch(err => {
    "Unable to sync-" + err;
  });

app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
