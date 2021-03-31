const mongoose = require('mongoose');
const Schema = mongoose.Schema

const ContentSchema = new Schema({
    class: {
        type: mongoose.Types.ObjectId,
        required: true
    },
    description: {
        type: String
    },
    links: {type: [Object]}
}, {timestamps: true})



module.exports = mongoose.model('content', ContentSchema);