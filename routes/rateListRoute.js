const router = require('express').Router();
const rateListController = require('../controller/rateListController');

router.get('/', rateListController.getData);
router.post('/', rateListController.createData);
router.delete('/:id', rateListController.deleteData);
router.put('/:id', rateListController.updateData);
router.get('/:id', rateListController.getById);

module.exports = router;