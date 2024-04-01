const router = require('express').Router();
const doctorDocumentController = require('../controller/doctorDocumentController');

router.get('/', doctorDocumentController.getData);
router.post('/', doctorDocumentController.createData);
router.delete('/:id', doctorDocumentController.deleteData);
router.put('/:id', doctorDocumentController.updateData);
router.get('/:id', doctorDocumentController.getById);

module.exports = router;