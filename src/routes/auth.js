const express = require('express');
const router = express.Router();

const signIn = require('./controllers/auth/signIn');
const signUp = require('./controllers/auth/signUp');

router.post('/signin', signIn);
router.post('/signup', signUp);

module.exports = router;