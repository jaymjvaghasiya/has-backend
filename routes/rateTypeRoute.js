const router = require('express').Router();
const rateTypeController = require('../controller/rateTypeController');

router.get('/', rateTypeController.getData);
router.post('/', rateTypeController.createData);
router.delete('/:id', rateTypeController.deleteData);
router.put('/:id', rateTypeController.updateData);
router.get('/:id', rateTypeController.getById);

module.exports = router;