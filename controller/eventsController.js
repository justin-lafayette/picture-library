const db = require("../models");

module.exports = {
  findAll: function(req, res) {
    //console.log('in eventsController - findAll', req.query.email);
    db.events.findAll(
      // {
      // include: {
      //   model:db.users,
      //   // attributes:[
      //   //   db.users.email
      //   // ],
      //   through: {
      //     model : db.EventUsers
      //   }
      // }
      //,    
    // where:{
    //   email : req.query.email
    // } 
      
    // }
    ).then(function(events){
        res.json(events);
    })
    .catch((err) => {
      console.log('Error in findAll ', err);
    });
  },
  findByUserEmail: function(req,res){
      console.log('in findByUserEmail email ', req.params.email);
      db.users.findAll({
        where: {
          email: req.params.email
        },
        include: [{
          model: db.events,
          as: 'events',
          required: false,
          attributes:['title'],
          through: {
            model: db.eventUsers
          }
        }]
      }).then(function(events){
        console.log('All those events',events);
        console.log('and I ran, I ran so far away, i just ran, and I ran, I ran so far away, i just ran, ')
          res.json(events);
        });
  },
   findById: function(req, res) {
     console.log('in eventsController.js - req event id ', req.params);
    db.events
      .findOne({
          where: {
              event_id : req.params.eventId
          }
      }).then(function(event){
        console.log('in eventsController - found the event ');
        res.json(event);
      })
      .catch((err) => {
        console.log('in eventsController - error finding event ');
        console.log(err);
      });
  },
  create: function(req, res) {
    //console.log('in create event', req.body.email);
    db.events.create(req.body)
      .then(function(event){
        //console.log("Aparna's event",event);
        const{title, event_date, event_description, email} = req.body
        //console.log('in then of create event', event);
        //console.log("req.email",req.body);
        const body = {
          event_id: event.event_id,
          email,
          title,
          event_date,
          event_description
        }
        //console.log("Title",title, "DATE:",event_date, "Description:",event_description)
        db.EventUsers.create(body)
        .then(function(eventUsers){
          console.log('event user created');
          res.json(eventUsers);
        })
        .catch((err) => {
          console.log('Error in eventCntroller.create error ', err);
        })

      });
  }
  //,
//   findByTitle: function(req, res) {
//     console.log('in eventsController.js - req ', req.body);
//    db.events
//      .findOne({
//          where: {
//              title : req.body.title
//          }
//      }).then(function(user){
//        console.log('in eventsController - found the event ');
//        res.json(event);
//      })
//      .catch((err) => {
//        console.log('in eventsController - error finding event ');
//        console.log(err);
//      });
//  }
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
