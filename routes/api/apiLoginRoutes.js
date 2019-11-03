// const db = require("../../models");
// const passport = require("../../utils/passport");

// // const multer = require("multer");

// // const storage = multer.diskStorage({
// //   destination: function(req, file, cb) {
// //     cb(null, "public/uploads");
// //   },
// //   filename: function(req, file, cb) {
// //     cb(null, file.fieldname + "-" + Date.now());
// //   }
// // });

// // const upload = multer({ storage: storage });

// const express = require("express");

// const router = express.Router();

// router.post(
//   "/signin",
// // //   upload.single("avatar"),
//   passport.authenticate("local"),
//   function(req, res) {
//     console.log("Hit signin route");
//     console.log(req.body);
//     res.json("/home");
//   }
// );

// // router.post("/signup", 
// // // upload.single("avatar"), 
// // function(req, res) {
// //   if (!req.file) {
// //     return res.json({ errors: [{ message: "Must include image" }] });
// //   } else {
// //     db.User.create({
// //       email: req.body.email,
// //       password: req.body.password,
// //       firstName: req.body.firstName,
// //       lastName: req.body.lastName,
// //       userName: req.body.userName,
// //       userPhoto: req.file.path.replace("public", "")
// //     })
// //       .then(function() {
// //         res.redirect(307, "/signin");
// //       })
// //       .catch(function(err) {
// //         res.json(err);
// //       });
// //   }
// // });

// //
// // Route for getting some data about our user to be used client side
// // router.get("/user", function(req, res) {
// //   if (!req.user) {
// //     // The user is not logged in, send back an empty object
// //     res.json({});
// //   } else {
// //     // Otherwise send back the user's email and id
// //     // Sending back a password, even a hashed password, isn't a good idea
// //     res.json({
// //       email: req.user.email,
// //       id: req.user.id
// //     });
// //   }
// // });

// module.exports = router;