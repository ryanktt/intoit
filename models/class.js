const mongoose = require('mongoose');
const Schema = mongoose.Schema

const ClassSchema = new Schema({
    course: {
        type: mongoose.Types.ObjectId,
        ref: 'course',
        require: true
    },
    title: {
        type: String, 
        required: true
    },
    video: {
        type: String,
        required: true
    }
}, {timestamps: true});

module.exports = mongoose.model('class', ClassSchema);