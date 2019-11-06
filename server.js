const express = require("express");
const path = require("path");
// const routes = require("./routes");

const PORT = process.env.PORT || 3001;
const app = express();
const body_parser = require('body-parser');
const passport = require("passport");
const session = require("express-session");
const router = express.Router();

var db = require("./models");

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
  
  // for passport functionality
  app.use(session({ secret: 'keyboard cat', resave: false, saveUninitialized:true}))
  app.use(passport.initialize());
  app.use(passport.session());
  
  // Define API routes here
  require("./routes/api", "./routes/authRoutes.js")(router, passport);
  app.use("/api", router);
  app.use("/auth", router);
  
  //for post routes
  app.use(body_parser.json());
  
  //add local passport strategy
  require('./utils/passport')(passport, db.user);
 
db.sequelize.sync()
.then(function() {
  app.listen(PORT, function() {
    console.log("API Server now listening on PORT " + PORT);
  });
})
.catch((err)=>console.log('err:',err));
