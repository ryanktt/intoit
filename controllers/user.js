const User = require('../models/user');
const Course = require('../models/course');
const Class = require('../models/class');
const Content = require('../models/content');

exports.getUser = async(req, res) => {
    try {
        const user = await User.findById(req.user.id).select('name');

        res.json(user);
  
    } catch (err) {
        console.error(err);
        res.status(500).json('Erro de Servidor');
    }
}

exports.getCourses = async(req, res) => {

    try {
        const courses = await Course.find({'user.id': req.user.id}).sort({'createdAt': -1});
     
        res.json(courses);
    } catch (err) {
        console.error(err);
        res.status(500).json('Erro de Servidor');
    }
}

exports.postAddCourse =  async(req, res) => {
    const {title, description, image} = req.body;

    try {
        const course = new Course({title, description, image, user: req.user});
        await course.save();
        res.json('Sucesso')
    } catch (err) {
        console.error(err);
        res.status(500).json('Erro de Servidor');
    }
}

exports.postAddClass =  async(req, res) => {
    const {title, video, description, links} = req.body;
    const courseId = req.params.id;

    try {
        //check if client is course's owner
        const course = await Course.findById(courseId);
      
        if(course.user.id === req.user.id) {
            res.status(403). json('Não Autorizado.');
        }

        const lesson = new Class({title, video, course: courseId});
        //check if it has content
        let content
        if(description || links.length > 0) {
            content = new Content({class: lesson._id, description, links})
            content.save();
        }

        //add class to course's array of ids
        course.classes.unshift(lesson);

        await Promise.all([lesson.save(), course.save()]);
        res.json('Sucesso');
    } catch (err) {
        console.error(err);
        res.status(500).json('Erro de Servidor');
    }
}