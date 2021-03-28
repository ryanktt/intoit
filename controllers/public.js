const Course = require('../models/course');

exports.getCourses = async (req, res) => {
    try {
        const courses = await Course.find({});
        console.log(courses);
        res.json('sucesso')
    } catch (err) {
        console.error(err);
    }

};