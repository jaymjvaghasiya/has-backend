const router = require('express').Router();
const appointmentStatusController = require('../controller/appointmentStatusController');

router.get('/', appointmentStatusController.getData);
router.post('/', appointmentStatusController.createData);
router.delete('/:id', appointmentStatusController.deleteData);
router.put('/:id', appointmentStatusController.updateData);
router.get('/:id', appointmentStatusController.getById);

module.exports = router;