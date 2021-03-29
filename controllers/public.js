const Course = require('../models/course');
const Class = require('../models/class');

exports.getCourses = async (req, res) => {
    try {
        const courses = await Course.find({}).sort({'createdAt': -1});

        res.json(courses)
    } catch (err) {
        console.error(err);
        res.status(500).json('Erro de Servidor');
    }

};

exports.getCourse = async(req, res) => {
    const courseId = req.params.id;

    try {
        const [courseTitle, classes] = await Promise.all([
            Course.findById(courseId).select('title'),
            Class.find({course: courseId}).select('title')
        ]);
        const course = {title: courseTitle.title, classes};

        res.json(course);
    } catch (err) {
        console.error(err);
        res.status(500).json('Erro de Servidor');
    }
}

exports.getClass = async(req, res) => {
    const classId = req.params.id;

    try {
        const lesson = await Class.findById(classId);
        res.json(lesson);
        
    } catch (err) {
        console.error(err);
        res.status(500).json('Erro de Servidor');
    }
}

