const db = require("../models");

module.exports = {
  attachEventToUser: function(req,res) {
    
  },
  findAll: function(req, res) {
    console.log('in eventUserController - findAll');
    db.EventUsers.findAll(
    
    ).then(function(eventUser){
        res.json(eventUser);
    })
    .catch((err) => {
      console.log('Error in findAll of eventUser', err);
    });
  },
  // findByUserEmail: function(req,res){
  //     console.log('in findByUserEmail of eventUser controller email ', req.params.email);
  //     db.EventUsers.findAll({
  //       where: {
  //         email:req.params.email
  //       }
  //     }).then(function(events){
  //         // now call findAll of events to get events data
  //       console.log(events);
  //       // res.json(events);
  //       res.json(events)
  //     });
  // },
   findById: function(req, res) {
     console.log('in eventUserController.js - req event id ', req.params);
    db.EventUsers
      .findOne({
          where: {
              eventuser_id : req.params.eventuserId
          }
      }).then(function(event){
        console.log('in eventUserController - found the event ');
        res.json(event);
      })
      .catch((err) => {
        console.log('in eventUserController - error finding event ');
        console.log(err);
      });
  },
  create: function(req, res) {
    console.log('in create EventUser req',req);
    db.EventUeer.create(req)
      .then(function(eventUser){
        console.log('in then of create event');
        res.json(eventUser);
      });
  }
};
