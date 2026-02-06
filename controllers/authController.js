const User = require('../models/User');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

exports.register = async (req, res) => {
    try {
        await User.create(req.body);
        res.status(201).json({ message: "Success" });
    } catch (e) { res.status(400).json(e); }
};

exports.login = async (req, res) => {
    const user = await User.findOne({ email: req.body.email });
    if (user && (await bcrypt.compare(req.body.password, user.password))) {
        const token = jwt.sign({ id: user._id, role: user.role }, process.env.JWT_SECRET);
        res.json({ token, role: user.role, name: user.name, id: user._id });
    } else { res.status(401).json({ message: "Failed" }); }
};

exports.getUsersByRole = async (req, res) => {
    try {
        const users = await User.find({ role: req.query.role }).select('name email');
        res.json(users);
    } catch (err) { res.status(500).json(err); }
};

exports.deleteUser = async (req, res) => {
    try {
        if (req.params.id === req.user.id) {
            return res.status(400).json({ message: "You cannot delete yourself!" });
        }
        await User.findByIdAndDelete(req.params.id);
        res.json({ message: "User deleted successfully" });
    } catch (err) {
        res.status(500).json(err);
    }
};

exports.getUsersByRole = async (req, res) => {
    try {
        const users = await User.find({ role: req.query.role }).select('name email role');
        res.json(users);
    } catch (err) {
        res.status(500).json(err);
    }
};

exports.updateUser = async (req, res) => {
    try {
        const { name, password } = req.body;
        const user = await User.findById(req.params.id);
        
        if (!user) return res.status(404).json({ message: "User not found" });

        if (name) user.name = name;
        if (password) user.password = password; 

        await user.save(); 
        res.json({ message: "User updated successfully" });
    } catch (err) {
        res.status(500).json(err);
    }
};