const router = require('express').Router();
const patientController = require('../controller/patientController');

router.get('/', patientController.getData);
router.get('/status', patientController.getByStatus);
router.get('/getbyid/:id', patientController.getById);

router.post('/', patientController.postData);
// router.post('/', patientController.createData);
router.post('/createOne', patientController.createOneData);
router.post('/login', patientController.login);

router.delete('/:id', patientController.deleteData);

// router.put('/:email', patientController.updateData);
router.put('/status/:id', patientController.updateData);

module.exports = router;