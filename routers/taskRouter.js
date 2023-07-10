const taskController = require('../controllers/taskController');
const express = require('express');
const router = express.Router();
const authorize = require('../middlewares/auth');

router.get('/', taskController.getAllTasks);
router.get('/:id', taskController.getTaskById);
router.post('/', authorize ,taskController.createTask);
router.post('/:id', authorize ,taskController.updateTask);
router.delete('/:id', authorize ,taskController.deleteTask);

module.exports = router;
