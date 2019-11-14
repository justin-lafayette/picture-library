const db = require("../models");
const pictureController = require("../controller/picturesController");

module.exports = {
  findAll: function(req, res) {
    //console.log('in eventsController - findAll', req.query.email);
    db.events
      .findAll()
      .then(function(events) {
        res.json(events);
      })
      .catch(err => {
        console.log("Error in findAll ", err);
      });
  },
  findByUserEmail: function(req, res) {
    //console.log("in findByUserEmail email ", req.params.email);
    db.users
      .findAll({
        where: {
          email: req.params.email
        },
        include: [
          {
            model: db.events,
            as: "events",
            required: false,
            attributes: ["title"],
            through: {
              model: db.eventUsers
            }
          }
        ]
      })
      .then(function(events) {
        res.json(events);
      });
  },
  findById: function(req, res) {
    //console.log("in eventsController.js - req event id ", req.params);
    db.events
      .findOne({
        where: {
          event_id: req.params.eventId
        }
      })
      .then(function(event) {
        console.log("in eventsController - found the event ");
        res.json(event);
      })
      .catch(err => {
        console.log("in eventsController - error finding event ");
        console.log(err);
      });
  },
  create: function(req, res) {
    //console.log('in create event', req.body.email);
    db.events.create(req.body).then(function(event) {
      //console.log("Aparna's event",event);
      const { title, event_date, event_description, email } = req.body;
      //console.log('in then of create event', event);
      //console.log("req.email",req.body);
      const body = {
        event_id: event.event_id,
        email,
        title,
        event_date,
        event_description
      };
      //console.log("Title",title, "DATE:",event_date, "Description:",event_description)
      db.EventUsers.create(body)
        .then(function(eventUsers) {
          console.log("event user created");
          res.json(eventUsers);
        })
        .catch(err => {
          console.log("Error in eventCntroller.create error ", err);
        });
    });
  },
  findMyPics: function(req, res) {
    console.log("in eventsController.findmypics");
    console.log("In evenetsController findMyPics email ", req.params.event_id);
    db.pictures
      .findAll({
        where: {
          event_id: req.params.event_id
        }
      })
      .then(function(pictures) {
        res.json(pictures);
      });
  }
  ,
  subscribe: function(req,res){
    console.log('in eventsController - subscribe req ',req.params);
    //console.log('in eventsController - subscribe  email ',req.body.email);
    // create an entry in the relationship table
    db.EventUsers.create({
      event_id: req.params.event_id,
      email: req.params.email
    })
    .then((eventUser)=>{
      res.json(eventUser);
    })
    .catch((err) => {console.log("error while subscribing", err)
     res.json(err)})
  }
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
