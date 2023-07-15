const commentModel = require('../models/comment');

exports.createComment = async (req, res, next) => {
    try{
        const userId = req.user.user.id;
        const taskId = req.params.id;
        const {comment} = req.body;

        //check userId and taskId
        if(!userId ||!taskId){
            return res.status(400).json({
                message: 'userId and taskId are required'
            });
        }
        //check if comment is empty
        if(!comment){
            return res.status(400).json({
                message: 'comment is required'
            });
        }

        const commentId = await commentModel.createComment(comment, userId, taskId);

        res.status(200).json({
            message: 'comment created successfully',
            commentId,
        })
    }catch(err){
        next(err);
    }
}

exports.getCommentByTaskId = async (req, res, next) => {
    try{
        const taskId = req.params.id;
        const comments = await commentModel.getCommentByTaskId(taskId);

        if (!comments.length) {
            return res.status(404).json({
                message: 'Comments not found'
            });
        }

        res.status(200).json({
            comments: comments,
        })
    }catch(err){
        next(err);
    }
}

exports.getAllComments = async (req, res, next) => {
    try{
        //check is admin
        const adminId = req.user.user.role_id;
        if (adminId !== 1){
            return res.status(401).json({
                message: 'You are not authorized to perform this action'
            })
        }

        const comments = await commentModel.getAllComments();
        res.status(200).json({
            comments
        })
    }catch(err){
        next(err);
    }
}

exports.updateComment = async (req, res, next) => {
    try{
        const {id, comment} = req.body;
        //check if comment is empty
        if(!comment){
            return res.status(400).json({
                message: 'comment is required'
            });
        }

        //check if comment is owned by user
        const {userId} = req.body;
        if (userId !== req.user.user.id){
            return res.status(401).json({
                message: 'Unauthorized'
            });
        }

        await commentModel.updateComment(comment, id);
        res.status(200).json({
            message: 'Comment updated successfully',
        })
    }catch(err){
        next(err);
    }
}

exports.deleteComment = async (req, res, next) => {
    try{
        //check if comment is owned by user or admin
        const {userId} = req.body;
        if (req.user.user.role_id === 1 || userId === req.user.user.id){
            const {id} = req.params;
            await commentModel.deleteComment(id);
            return res.status(200).json({
                message: 'Comment deleted successfully',
            })
        }else{
            return res.status(401).json({
                message: 'Unauthorized'
            });
        }
        
    }catch(err){
        next(err);
    }
}