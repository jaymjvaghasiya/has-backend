const router = require('express').Router();
const materialController = require('../controller/materialController');

router.get('/', materialController.getData);
router.post('/', materialController.createData);
router.delete('/:id', materialController.deleteData);
router.put('/:id', materialController.updateData);
router.get('/:id', materialController.getById);

module.exports = router;