const router = require('express').Router();

console.log("Hit authRoutes.js")

router.get('/auth/isauth', (req, res) => {
    res.send({ user: req.user });
})

module.exports = router;