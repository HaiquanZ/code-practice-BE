const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const authorize = require('../middlewares/auth');

router.post('/login', userController.login);
router.post('/register', userController.register);
router.get('/', userController.getAllUsers);
router.get('/:id', userController.getUserById);
router.post('/addpoint', authorize, userController.addPoint);
router.delete('/:id', authorize ,userController.deleteUser);

module.exports = router;