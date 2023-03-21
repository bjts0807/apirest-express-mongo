// RUTAS API
const router = require('express').Router();

router.use('/trips', require('./trips.route'));
router.use('/auth', require('./auth.route'));
router.use('/healthServiceManager', require('./healthServiceManager.route'));
router.use('/contract', require('./contract.route'));

module.exports = router;