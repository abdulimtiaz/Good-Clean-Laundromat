const express = require('express');
const router = express.Router();

const createCard = require('./controllers/cards/createCard');
const updateCard = require('./controllers/cards/updateCard');
const deactivateCard = require('./controllers/cards/deactivateCard');
const authenticateToken = require('./middlewares/authenticateToken');
const verifyEmployee = require('./middlewares/verifyEmployee');
const verifyCreator = require('./middlewares/verifyCreator');
const getCard = require('./controllers/cards/getCard');
const getAllCards = require('./controllers/cards/getAllCards');
const getUserCards = require('./controllers/cards/getUserCards');

router.post('/', authenticateToken, createCard);
router.get('/getAllCards', getAllCards);
router.get(`/getUserCards`, authenticateToken, getUserCards);
router.get('/:id', getCard);
router.put('/:id', authenticateToken, verifyCreator, updateCard);
router.delete('/:id', authenticateToken, verifyEmployee, deactivateCard);

module.exports = router;
