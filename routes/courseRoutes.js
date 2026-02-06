const express = require('express');
const router = express.Router();
const courseController = require('../controllers/courseController');
const { protect } = require('../middleware/auth');
const { superAdminOnly } = require('../middleware/auth');


router.get('/', protect, courseController.getAll);
router.get('/:id', protect, courseController.getById);

router.post('/', protect, (req, res, next) => {
    if (req.user.role === 'admin' || req.user.role === 'superadmin') {
        next();
    } else {
        res.status(403).json({ message: "Permission denied" });
    }
}, courseController.create);


router.patch('/:id/content', protect, courseController.addContent);
router.delete('/:courseId/content/:title', protect, courseController.deleteContent);
router.patch('/:id/rename', protect, superAdminOnly, courseController.renameCourse);

router.delete('/:id', protect, superAdminOnly, courseController.deleteFullCourse);
module.exports = router;