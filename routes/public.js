const express = require('express');
const router = express.Router();

const public = require('../controllers/public');

router.get('/courses', public.getCourses);
router.get('/course/:id', public.getCourse);
router.get('/class/:id', public.getClass);


module.exports = router;