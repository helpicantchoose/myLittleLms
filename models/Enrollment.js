const mongoose = require('mongoose');

const enrollmentSchema = new mongoose.Schema({
    student_id: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    course_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Course' },
    grades: [{ 
        item: String, // e.g., "Midterm"
        score: Number, 
        comment: String,
        fileUrl: String, // ADDED: To store the Supabase link
        date: { type: Date, default: Date.now } 
    }]
});

enrollmentSchema.index({ student_id: 1, course_id: 1 }, { unique: true });
module.exports = mongoose.model('Enrollment', enrollmentSchema);

