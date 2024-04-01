const router = require('express').Router();
const roleController = require('../controller/roleController');

router.get('/', roleController.getData);
router.post('/', roleController.createData);
router.delete('/:id', roleController.deleteData);
router.put('/:id', roleController.updateData);
router.get('/:id', roleController.getById);

module.exports = router;