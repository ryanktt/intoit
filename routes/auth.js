const express = require('express');
const router = express.Router();

const auth = require('../controllers/auth');

router.post('/signup', auth.postSignup);
router.post('/login', auth.postLogin);


module.exports = router;