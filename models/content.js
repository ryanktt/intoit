const mongoose = require('mongoose');
const Schema = mongoose.Schema

const ContentSchema = new Schema({
    
}, {timestamps: true})



module.exports = mongoose.model('content', ContentSchema);