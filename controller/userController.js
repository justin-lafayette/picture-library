const db = require("../models");

module.exports = {
  findAll: function(req, res) {
    db.users.findAll({
    }).then(function(users){
        res.json(users);
    });
  },
   findById: function(req, res) {
     console.log('in userController.js - req ', req.body);
    db.users
      .findOne({
          where: {
              email : req.body.email
          }
      }).then(function(user){
        console.log('in userController - found the user ');
        res.json(user);
      })
      .catch((err) => {
        console.log('in userController - error finding user ');
        console.log(err);
      });
  }
,
  create: function(req, res) {
    console.log('in create user');
    db.users.create(req.body)
      .then(function(user){
        console.log('in then of create user');
        res.json(user);
      });
  }
  //,
//   update: function(req, res) {
//     db.User
//       .findOneAndUpdate({ _id: req.params.id }, req.body)
//       .then(dbModel => res.json(dbModel))
//       .catch(err => res.status(422).json(err));
//   },
//   remove: function(req, res) {
//     db.User
//       .findById({ _id: req.params.id })
//       .then(dbModel => dbModel.remove())
//       .then(dbModel => res.json(dbModel))
//       .catch(err => res.status(422).json(err));
//   }
};
