const router = require('express').Router();
const appointmentController = require('../controller/appointmentController');

router.get('/', appointmentController.getData);
router.post('/', appointmentController.createData);
router.delete('/:id', appointmentController.deleteData);
router.put('/:id', appointmentController.updateData);
router.get('/:id', appointmentController.getById);

module.exports = router;