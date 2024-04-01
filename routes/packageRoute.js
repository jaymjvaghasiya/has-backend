const router = require('express').Router();
const packageController = require('../controller/packageController');

router.get('/', packageController.getData);
router.post('/', packageController.createData);
router.delete('/:id', packageController.deleteData);
router.put('/:id', packageController.updateData);
router.get('/:id', packageController.getById);

module.exports = router;