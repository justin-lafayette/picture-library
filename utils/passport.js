var LocalStrategy = require("passport-local").Strategy;
const db = require("../models");

//
//We will need the models folder to check passport agains
//
// Telling passport we want to use a Local Strategy. In other words,
//we want login with a username/email and password
module.exports = function(passport, userModel) {

  passport.use(
    'local-signin',
    new LocalStrategy(
      {
        usernameField: 'email',
        passwordField: 'password',
      },
      function(email, password, done) {
        console.log("userModel: ", userModel)
        console.log("in passport.js function email ", email);
        console.log("in passport.js function password ", password);
        // When a user tries to sign in this code runs
        db.users.findOne({ where: {email: email} }).then(function(user) {
          if (!user) {
            console.log("USER NOT FOUND!"); 
            return done(null, false, { message: 'Incorrect username.' });
          }
          if ( password != user.password ) {
            console.log("PASSWORD DOESNT MATCH!"); 
            return done(null, false, { message: 'Incorrect password.' });
          }
          console.log("We made it to the end of our callback?")
          return done(null, user);
        }).catch(err => done(err));
      }
    )
  );
              
  //
  // In order to help keep authentication state across HTTP requests,
  // Sequelize needs to serialize and deserialize the user
  // Just consider this part boilerplate needed to make it all work
  passport.serializeUser(function(user, cb) {
    cb(null, user);
  });
  //
  passport.deserializeUser(function(obj, cb) {
    cb(null, obj);
  });
}