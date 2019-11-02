const db = require("../models");

// Defining methods for the booksController
module.exports = {
  findAll: function(req, res) {
    db.user.findAll({
    }).then(function(user){
        res.json(user);
    });
  },
   findById: function(email, res) {
    db.user
      .findone({
          where: {
              email : email
          }
      }).then(function(email){
        res.json(email);
      });
  }
,
  create: function(req, res) {
    console.log('in create user');
    db.user.create(req.body)
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
