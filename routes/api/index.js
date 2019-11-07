const userController = require("../../controller/userController");
const passportController = require("../../controller/passportController");
const eventsController = require("../../controller/passportController");
const router = require("express").Router();
const passport = require("passport");

// Matches with "/api"
router
.route("/")
.get(userController.findAll)
.post(userController.create);

router.route("/signup").post(userController.create);

router.route("/signin")
.post(passport.authenticate("local-signin"), passportController.signIn);

router.route("/:id").get(userController.findById);
// .put(userController.update)
// .delete(userController.remove);

module.exports = router;