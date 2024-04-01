const router = require('express').Router();
const packageRateListController = require('../controller/packageRateListController');

router.get('/', packageRateListController.getData);
router.post('/', packageRateListController.createData);
router.delete('/:id', packageRateListController.deleteData);
router.put('/:id', packageRateListController.updateData);
router.get('/:id', packageRateListController.getById);

module.exports = router;