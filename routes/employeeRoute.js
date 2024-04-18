const router = require('express').Router();
const employeeController = require('../controller/employeeController');

router.get('/', employeeController.getData);
// router.post('/', employeeController.createData);
router.delete('/:id', employeeController.deleteData);
router.put('/:id', employeeController.updateData);
router.get('/:id', employeeController.getById);
router.post('/login', employeeController.login);
router.post('/', employeeController.postData);

module.exports = router;