const router = require('express').Router();
const serviceTypeController = require('../controller/serviceTypeController');

router.get('/', serviceTypeController.getData);
router.post('/', serviceTypeController.createData);
router.delete('/:id', serviceTypeController.deleteData);
router.put('/:id', serviceTypeController.updateData);
router.get('/:id', serviceTypeController.getById);

module.exports = router;