const router = require('express').Router();
const prescriptionController = require('../controller/prescriptonController');

router.get('/', prescriptionController.getData);
router.post('/', prescriptionController.createData);
router.get('/:id', prescriptionController.getById);
router.get('/getOne/:id', prescriptionController.getOneByID);

module.exports = router;