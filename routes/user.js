const express = require('express');
const router = express.Router();

const user = require('../controllers/user');

router.get('/', user.getUser);
router.get('/courses', user.getCourses);

router.post('/course', user.postAddCourse);
router.post('/class/:id', user.postAddClass)



module.exports = router;