const testController = require('../controllers/testController');
const express = require('express');
const router = express.Router();
const authorize = require('../middlewares/auth');

router.post('/:id', testController.getTestByTaskId);

module.exports = router;