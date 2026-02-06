const express = require('express');
const router = express.Router();
const User = require('../models/User');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

router.post('/login', async (req, res) => {
    const user = await User.findOne({ email: req.body.email });
    if (user && await bcrypt.compare(req.body.password, user.password)) {
        const token = jwt.sign({ id: user._id, role: user.role }, process.env.JWT_SECRET);
        res.json({ token, role: user.role, name: user.name });
    } else res.status(401).send();
});

router.post('/register', async (req, res) => {
    await User.create(req.body);
    res.status(201).send();
});

const { protect, superAdminOnly } = require('../middleware/auth');
const authController = require('../controllers/authController');

router.get('/manage/users', protect, superAdminOnly, authController.getUsersByRole);

// ...
router.patch('/manage/users/:id', protect, superAdminOnly, authController.updateUser);
router.delete('/manage/users/:id', protect, superAdminOnly, authController.deleteUser);
module.exports = router;