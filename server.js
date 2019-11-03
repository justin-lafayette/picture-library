const express = require("express");
const path = require("path");
const routes = require("./routes");

const PORT = process.env.PORT || 3001;
const app = express();
const body_parser = require('body-parser');
const passport = require("passport");

var db = require("./models");



// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

/* For Passport and Session Authentication */
// const session = require('express-session')
// const RedisStore = require('connect-redis')(session)

// const app = express()
// app.use(session({
//   store: new RedisStore({
//     url: config.redisStore.url
//   }),
//   secret: config.redisStore.secret,
//   resave: false,
//   saveUninitialized: false
// }))
// app.use(passport.initialize())
// app.use(passport.session())

// Define API routes here
app.use(routes);

// Send every other request to the React app
// Define any API routes before this runs
// app.get("*", (req, res) => {
//   res.sendFile(path.join(__dirname, "./client/build/index.html"));
// });

// for passport functionality
app.use(passport.initialize());
app.use(passport.session());

db.sequelize.sync()
.then(function() {
  app.listen(PORT, function() {
    console.log("API Server now listening on PORT " + PORT);
  });
})
.catch((err)=>console.log('err:',err));
