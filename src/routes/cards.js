const express = require('express');
const router = express.Router();

const createCard = require('./controllers/cards/createCard');
const updateCard = require('./controllers/cards/updateCard');

router.post('/createCard', createCard);
router.put('/updateCard', updateCard);

module.exports = router;