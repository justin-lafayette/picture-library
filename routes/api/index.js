const router = require("express").Router();
const userRoutes = require("./user");
const ppauth = require("./apiLoginRoutes");

// User routes
// router.use( userRoutes);
router.use( ppauth);

module.exports = router;
