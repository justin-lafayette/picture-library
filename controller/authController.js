const router = require('express').Router();
// const { Users } = require('../models');

router.get('/auth/isauth', (req, res) => {
    res.send({ user: req.user });
});
