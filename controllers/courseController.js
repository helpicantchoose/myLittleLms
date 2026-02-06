const Course = require('../models/Course');
const Enrollment = require('../models/Enrollment');
const mongoose = require('mongoose');

exports.getAll = async (req, res) => {
    try {
        let filter = {};

        if (req.user.role === 'admin') {
            filter = { teacher_id: new mongoose.Types.ObjectId(req.user.id) };
        } 
  
        else if (req.user.role === 'superadmin') {
            filter = {}; 
        }

        const courses = await Course.find(filter).populate('teacher_id', 'name');
        res.json(courses);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

exports.getById = async (req, res) => {
    try {
        const course = await Course.findById(req.params.id).populate('teacher_id', 'name');
        if (!course) return res.status(404).json({ message: "Not found" });
        res.json(course);
    } catch (err) {
        res.status(500).json(err);
    }
};

exports.addContent = async (req, res) => {
    try {
        const { title, type, url, details } = req.body;
        const updated = await Course.findByIdAndUpdate(
            req.params.id,
            { 
                $push: { 
                    content: { title, type, url, details } 
                } 
            },
            { new: true, runValidators: true }
        );

        if (!updated) return res.status(404).json({ message: "Course not found" });
        
        res.json(updated);
    } catch (err) {
        console.error("Add Content Error:", err);
        res.status(400).json({ message: err.message });
    }
};

exports.create = async (req, res) => {
    try {
        const teacherId = req.body.teacher_id || req.user.id;
        
        const course = await Course.create({
            title: req.body.title,
            category: req.body.category,
            teacher_id: teacherId
        });
        res.status(201).json(course);
    } catch (err) { res.status(400).json(err); }
};

exports.deleteContent = async (req, res) => {
    try {
        const { courseId, title } = req.params;
        const updatedCourse = await Course.findByIdAndUpdate(
            courseId,
            { $pull: { content: { title: title } } },
            { new: true }
        );
        await Enrollment.updateMany(
            { course_id: new mongoose.Types.ObjectId(courseId) },
            { $pull: { grades: { item: title } } }
        );

        console.log(`Cleanup: Deleted assignment '${title}' and all related grades.`);
        res.json({ message: "Content and related grades deleted", updatedCourse });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

exports.deleteFullCourse = async (req, res) => {
    try {
        await Course.findByIdAndDelete(req.params.id);
        res.json({ message: "Course deleted successfully" });
    } catch (err) {
        res.status(500).json(err);
    }
};

exports.renameCourse = async (req, res) => {
    try {
        const { title } = req.body;
        const updated = await Course.findByIdAndUpdate(
            req.params.id,
            { $set: { title: title } }, 
            { new: true }
        );
        res.json(updated);
    } catch (err) {
        res.status(500).json(err);
    }
};