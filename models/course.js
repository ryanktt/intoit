const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CourseSchema = new Schema({
    user: {
        id: {
            type: mongoose.Types.ObjectId,
            ref: 'user',
            required: true
        },
        name: {
            type: String,
            required: true
        }
        
    },
    title: {
        type: String, 
        required: true
    },
    image: {
        type: String, 
        required: true
    },
    description: {
        type: String, 
        required: true
    },
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