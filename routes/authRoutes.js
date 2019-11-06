const authController = require("../controller/authController");
const router = require('express').Router();

module.exports = function (router, passport) {

    router.get('/auth/isauth', (req, res) => {
        res.send({ user: req.user });
    })
}