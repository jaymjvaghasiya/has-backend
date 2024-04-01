const router = require('express').Router();
const paymentController = require('../controller/paymentController');

router.get('/', paymentController.getData);
router.post('/', paymentController.createData);
router.delete('/:id', paymentController.deleteData);
router.put('/:id', paymentController.updateData);
router.get('/:id', paymentController.getById);

module.exports = router;