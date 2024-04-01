const router = require('express').Router();
const patientController = require('../controller/patientController');

router.get('/', patientController.getData);
router.post('/', patientController.postData);
// router.post('/', patientController.createData);
router.post('/createOne', patientController.createOneData);
router.delete('/:id', patientController.deleteData);
router.put('/:id', patientController.updateData);
router.get('/getbyid/:id', patientController.getById);
router.post('/login', patientController.login);
router.get('/status', patientController.getByStatus);

module.exports = router;