const router = require('express').Router();
const uploadController = require('../controller/UploadController');

router.post('/', uploadController.fileUpload);

module.exports = router;