const express = require('express');
const router = express.Router();

const public = require('../controllers/public');

router.get('/', public.getCourses);


module.exports = router;