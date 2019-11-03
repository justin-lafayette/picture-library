const userController = require("../../controller/userController");
const passportController = require("../../controller/passportController");

// Matches with "/api/user"

module.exports = function (router, passport) {

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
  
}
  