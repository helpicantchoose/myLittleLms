const express = require('express');
const router = express.Router();
const multer = require('multer');
const uploadController = require('../controllers/uploadController');
const { protect } = require('../middleware/auth');

const upload = multer({ storage: multer.memoryStorage() });
router.post('/', protect, upload.single('file'), uploadController.uploadFile);

module.exports = router;