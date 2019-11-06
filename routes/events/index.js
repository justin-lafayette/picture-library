const eventsController = require("../../controller/eventsController");
const router = require("express").Router();

// Matches with "/events"
router.route("/")
.get(eventsController.findAll);

router.route('/:id')
.get(eventsController.findById);

module.exports = router;