const express = require('express');
const router = express.Router();

const createCard = require('./controllers/cards/createCard');
const updateCard = require('./controllers/cards/updateCard');
const deactivateCard = require('./controllers/cards/deactivateCard');

router.post('/', createCard);
router.put('/updateCard', updateCard);
router.delete('/deactivateCard', deactivateCard);

module.exports = router;