const taskController = require('../controllers/taskController');
const express = require('express');
const router = express.Router();
const authorize = require('../middlewares/auth');

router.get('/', taskController.getAllTasks);
router.get('/:id', taskController.getTaskById);
router.post('/', authorize ,taskController.createTask);

module.exports = router;
