// RUTAS API
const router = require('express').Router();

router.use('/trips', require('./trips.route'));
router.use('/auth', require('./auth.route'));

module.exports = router;