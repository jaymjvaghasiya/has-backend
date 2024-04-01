const router = require('express').Router();
const packageItemController = require('../controller/packageItemController');

router.get('/', packageItemController.getData);
router.post('/', packageItemController.createData);
router.delete('/:id', packageItemController.deleteData);
router.put('/:id', packageItemController.updateData);
router.get('/:id', packageItemController.getById);

module.exports = router;