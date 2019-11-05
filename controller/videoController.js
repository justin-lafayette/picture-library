const db = require("../models");

// Defining methods for the booksController
module.exports = {
  findAll: function(req, res) {
    db.Videos
      .findAll({
          where: {
              email:req.email
          }
      }).then(function(videos){
          res.json(videos);
      });
  },
  findById: function(req, res) {
    db.videos
      .findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  create: function(req, res) {
    console.log('in create videos');
    db.videos
      .create(req.body)
      .then(function(dbModel){console.log('in then of create videos');
      res.json(dbModel);})
      .catch(err => res.status(422).json(err));
  },
  update: function(req, res) {
    db.videos
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  remove: function(req, res) {
    db.videos
      .findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};
