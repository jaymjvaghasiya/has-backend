const router = require('express').Router();
const doctorController = require('../controller/doctorController');

router.get('/', doctorController.getData);
// router.post('/', doctorController.createData);
router.post('/', doctorController.postData);
router.delete('/:id', doctorController.deleteData);
router.put('/:id', doctorController.updateData);
router.get('/:id', doctorController.getById);
router.post('/login', doctorController.login);

module.exports = router;