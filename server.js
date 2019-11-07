const express = require("express");
const path = require("path");

const PORT = process.env.PORT || 3001;
const app = express();
const body_parser = require("body-parser");
const passport = require("passport");
const session = require("express-session");
const router = express.Router();
const apiRoutes = require("./routes/api");
const eventRoutes = require("./routes/events");

const AWS = require("aws-sdk");
console.log('required AWS');

const fs = require("fs");

var db = require("./models");

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// for passport functionality
app.use(
  session({ secret: "keyboard cat", resave: false, saveUninitialized: true })
);
app.use(passport.initialize());
app.use(passport.session());

// Define API routes here

router.use("/api", apiRoutes);
router.use("/events", eventRoutes);

//if no other routes are hit, send the react app
router.use(function(req, res) {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

app.use(router);

//require("./routes/api", "./routes/authRoutes.js")(router, passport);

//app.use("/api", router); //commenting out as the route is defined above.
app.use("/auth", router);

//for post routes
app.use(body_parser.json());

//add local passport strategy
require("./utils/passport")(passport, db.user);

// For S3 bucket code -- need to be moved to its own compenent and route
//configuring the AWS environment
console.log('B4 AWS.config.update');

AWS.config.update({
  accessKeyId: "AKIAW2PG6CWYEOQYRJYF",
  secretAccessKey: "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"
});

console.log('after AWS.config.update');

var s3 = new AWS.S3();
console.log('s3 instance created');

var filePath = "./client/src/assets/images/birthday_2.jpg";
console.log('filepath');
//configuring parameters
var params = {
  Bucket: "project3.pic.library",
  Body: fs.createReadStream(filePath),
  Key: "folder/" + Date.now() + "_" + path.basename(filePath)
};

console.log('params');

s3.upload(params, function(err, data) {
  //handle error
  if (err) {
    console.log("Error in s3 upload", err);
  }

  //success
  if (data) {
    console.log("Uploaded in:", data.Location);
  }
});
console.log('S3 done');
// end of S3 bucket code
db.sequelize
  .sync()
  .then(function() {
    app.listen(PORT, function() {
      console.log("API Server now listening on PORT " + PORT);
    });
  })
  .catch(err => console.log("err:", err));
