const db = require("../models");

module.exports = {
  findAll: function(req, res) {
    db.events.findAll({
    }).then(function(events){
        res.json(events);
    });
  },
   findById: function(req, res) {
     console.log('in eventsController.js - req ', req.body);
    db.events
      .findOne({
          where: {
              event_id : req.body.event_id
          }
      }).then(function(user){
        console.log('in eventsController - found the event ');
        res.json(event);
      })
      .catch((err) => {
        console.log('in eventsController - error finding event ');
        console.log(err);
      });
  }
,
  create: function(req, res) {
    console.log('in create event');
    db.events.create(req.body)
      .then(function(event){
        console.log('in then of create event');
        res.json(event);
      });
  },
  findByTitle: function(req, res) {
    console.log('in eventsController.js - req ', req.body);
   db.events
     .findOne({
         where: {
             title : req.body.title
         }
     }).then(function(user){
       console.log('in eventsController - found the event ');
       res.json(event);
     })
     .catch((err) => {
       console.log('in eventsController - error finding event ');
       console.log(err);
     });
 },
 // Need to add one more find an event based on the current user id
 //
 //
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
