const express = require('express');
const router = express.Router();

// Load each controller
const auth = require('./auth');
const cards = require('./cards');

// Mount each controller under a specific route. These
// will be prefixes to all routes defined inside the controller
router.use('/auth', auth);
router.use('/cards', cards);

module.exports = router;