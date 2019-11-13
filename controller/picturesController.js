const db = require("../models");

// Defining methods for the booksController
module.exports = {
  findAll: function(req, res) {
    console.log("in pictureController findAll event_id ", req.params.event_id);
    db.pictures
      .findAll({
          where: {
              event_id:req.params.event_id
          }
      }).then(function(pictures){
          res.json(pictures);
      });
  },
  findById: function(req, res) {
    db.pictures
      .findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  create: function(req, res) {
    console.log('in create pictures');
    db.pictures
      .create(req.body)
      .then(function(dbModel){console.log('in then of create pictures');
      res.json(dbModel);})
      .catch(err => res.status(422).json(err));
  },
  update: function(req, res) {
    db.pictures
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  remove: function(req, res) {
    db.pictures
      .findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};

