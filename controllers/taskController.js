const taskModel = require('../models/task');

exports.getAllTasks = async (req, res, next) => {
    try{
        const tasks = await taskModel.getAllTasks();
        res.status(200).json({
            tasks: tasks,
        })
    }catch(err){
        next(err);
    }
}

exports.getTaskById = async (req, res, next) => {
    try{
        const taskId = req.params.id;
        const task = await taskModel.getTaskById(taskId);

        if (!task){
            res.status(404).json({
                message: 'Task not found'
            })
        }

        res.status(200).json({
            task: task
        })
    }catch(err){
        next(err);
    }
}

exports.createTask = async (req, res, next) => {
    try{
        //check admin id
        const adminId = req.user.user.id;
        if (adminId !== 0){
            return res.status(401).json({
                message: 'You are not authorized to perform this action'
            })
        }

        const {
            name,
            description,
            format
        } = req.body;
        const task = {
            name,
            description,
            format
        }

        const taskId = await taskModel.createTask(task);

        res.status(200).json({
            message: 'Task created successfully',
            taskId,
        })
    }catch(err){
        next(err);
    }
}