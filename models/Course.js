const mongoose = require('mongoose');

const courseSchema = new mongoose.Schema({
    title: { type: String, required: true },
    category: String,
    teacher_id: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    content: {
        type: [Object], 
        default: []
    }
}, { 
    strict: false, 
    minimize: false 
});

module.exports = mongoose.model('Course', courseSchema);


