const commentController = require('../controllers/commentController');
const express = require('express');
const router = express.Router();
const authorize = require('../middlewares/auth');

router.post('/update', authorize, commentController.updateComment);
router.post('/:id', authorize, commentController.createComment);
router.get('/:id', commentController.getCommentByTaskId);
router.delete('/:id', authorize ,commentController.deleteComment);

module.exports = router;