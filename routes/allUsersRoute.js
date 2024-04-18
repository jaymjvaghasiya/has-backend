const router = require('express').Router();
const allUsersController = require('../controller/allUsersController');

router.get('/', allUsersController.getAllUsers);
router.get('/:email', allUsersController.getOneUser);
router.get('/payment/:email', allUsersController.getOneUserforPayment);
router.get('/one/:email', allUsersController.getOne);
router.delete('/:email', allUsersController.deleteOne);
router.put('/:email', allUsersController.updatepass);

module.exports = router;