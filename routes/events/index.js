const eventsController = require("../../controller/eventsController");
const router = require("express").Router();

// Matches with "/events"
router.route("/")
.get(eventsController.findAll);

router.route('/:id')
.get(eventsController.findById);

router.route('/:userEmail')
.get(eventsController.findByUserEmail);

router.route('/newevent')
.post(eventsController.create);

module.exports = router;