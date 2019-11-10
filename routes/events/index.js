const eventsController = require("../../controller/eventsController");
const pictureControlller = require("../../controller/picturesController");
const router = require("express").Router();

// Matches with "/events"
router.route("/")
.get(eventsController.findAll);

router.route('/:eventId')
.get(eventsController.findById);

router.route('/:userEmail')
.get(eventsController.findByUserEmail);

router.route('/newevent')
.post(eventsController.create);

router.route('/pics')
.get(pictureControlller.findAll);

module.exports = router;