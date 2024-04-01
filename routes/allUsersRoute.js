const router = require('express').Router();
const allUsersController = require('../controller/allUsersController');

router.get('/', allUsersController.getAllUsers);

module.exports = router;