const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 5002;
const app = express();
const body_parser = require('body-parser');
const db = require('./client/config/db');

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
db.authenticate()
.then(() => {console.log('Database connected...');})
.catch((err)=>{console.error('Unable to connect to the database:', err);});

app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});





  
