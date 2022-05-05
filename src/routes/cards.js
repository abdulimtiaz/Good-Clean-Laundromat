const express = require('express');
const router = express.Router();

const createCard = require('./controllers/cards/createCard');

router.post('/', createCard);

module.exports = router;