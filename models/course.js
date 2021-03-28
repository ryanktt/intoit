const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CourseSchema = new Schema({
    title: {type: String, required: true},
    image: {type: String, required: true},
    about: {type: String, required: true},
    classes: [
        {
            class: {
                type: Schema.Types.ObjectId,
                ref: 'class'
            }
        }
    ]
}, {timestamps: true})

module.exports = mongoose.model('course', CourseSchema);