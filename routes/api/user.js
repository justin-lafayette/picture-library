const router = require("express").Router();
const userController = require("../../controller/userController");
const passportController = require("../../controller/passportController");

// Matches with "/api/user"
router
  .route("/")
  .get(userController.findAll)
  .post(userController.create);

router.route("/signup").post(userController.create);

router.route("/signin")
  .post(passportController.signIn);
// Matches with "/api/books/:id"
router.route("/:id").get(userController.findById);
// .put(userController.update)
// .delete(userController.remove);

module.exports = router;
