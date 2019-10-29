const db = require("../models");

// Defining methods for the booksController
module.exports = {
  findAll: function(req, res) {
    db.Events.findAll({
    }).then(function(events){
        res.json(events);
    });
  },
   findById: function(event_id, res) {
    db.Events
      .findone({
          where: {
              event_id : event_id
          }
      }).then(function(event){
        res.json(event);
      });
  }
,
  create: function(req, res) {
    db.Events.create(req.body)
      .then(function(event){
        res.json(event);
      });
  }
  //,
//   update: function(req, res) {
//     db.Events
//       .findOneAndUpdate({ _id: req.params.id }, req.body)
//       .then(dbModel => res.json(dbModel))
//       .catch(err => res.status(422).json(err));
//   },
//   remove: function(req, res) {
//     db.Events
//       .findById({ _id: req.params.id })
//       .then(dbModel => dbModel.remove())
//       .then(dbModel => res.json(dbModel))
//       .catch(err => res.status(422).json(err));
//   }
};