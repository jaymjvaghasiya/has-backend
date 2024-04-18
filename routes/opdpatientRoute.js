const router = require('express').Router();
const patientController = require('../controller/opdpatientController');

router.get('/', patientController.getData);
router.post('/', patientController.createData);
router.delete('/:id', patientController.deleteData);
// router.get('/:id', patientController.sentMail);
router.post('/mail', patientController.sentMail);

module.exports = router;