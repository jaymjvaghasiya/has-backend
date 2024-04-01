const router = require('express').Router();
const departmentController = require('../controller/departmentController');

router.get('/', departmentController.getData);
router.post('/', departmentController.createData);
router.delete('/:id', departmentController.deleteData);
router.put('/:id', departmentController.updateData);
router.get('/:id', departmentController.getById);

module.exports = router;