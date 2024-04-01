const router = require('express').Router();
const itemController = require('../controller/itemController');

router.get('/', itemController.getData);
router.post('/', itemController.createData);
router.delete('/:id', itemController.deleteData);
router.put('/:id', itemController.updateData);
router.get('/:id', itemController.getById);

module.exports = router;