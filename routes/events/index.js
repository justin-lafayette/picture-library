const eventsController = require("../../controller/eventsController");
const eventUserController = require("../../controller/eventUserController");
const pictureControlller = require("../../controller/picturesController");
const router = require("express").Router();

// Matches with "/events"
router.route("/")
.get(eventsController.findAll);

router.route('/event/:eventId')
.get(eventsController.findById);

router.route('/user/:email')
.get(eventsController.findByUserEmail);

router.route('/newevent')
.post(eventsController.create);

router.route('/allEvents')
.get(eventsController.findAll);

router.route('/event/:event_id/pictures')
.get(eventsController.findMyPics);

router.route('/event/subscribe/:email/:event_id')
.post(eventsController.subscribe);

router.route('/event/isSubscribed/:email/:event_id')
.get(eventUserController.findByEventNEmail);

module.exports = router;