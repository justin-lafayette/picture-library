const db = require("../models");
const userController = ("../controllers/userConstroller");

// Defining methods for the booksController
module.exports = {
  findAll: function(req, res) {
    db.Pictures
      .findAll({
          where: {
              email:req.email
          }
      }).then(function(pictures){
          res.json(pictures);
      });
  }
//   ,
//   findById: function(req, res) {
//     db.Pictures
//       .findById(req.params.id)
//       .then(dbModel => res.json(dbModel))
//       .catch(err => res.status(422).json(err));
//   },
//   create: function(req, res) {
//     db.Pictures
//       .create(req.body)
//       .then(dbModel => res.json(dbModel))
//       .catch(err => res.status(422).json(err));
//   },
//   update: function(req, res) {
//     db.Pictures
//       .findOneAndUpdate({ _id: req.params.id }, req.body)
//       .then(dbModel => res.json(dbModel))
//       .catch(err => res.status(422).json(err));
//   },
//   remove: function(req, res) {
//     db.Pictures
//       .findById({ _id: req.params.id })
//       .then(dbModel => dbModel.remove())
//       .then(dbModel => res.json(dbModel))
//       .catch(err => res.status(422).json(err));
//   }
};