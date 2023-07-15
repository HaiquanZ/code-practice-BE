const taskModel = require('../models/task');
const testModel = require('../models/test');

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
        const adminId = req.user.user.role_id;
        if (adminId !== 1){
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

        const testId = await testModel.createTest(taskId, req.body.input, req.body.output);

        res.status(200).json({
            message: 'Task created successfully',
            taskId,
            testId
        })
    }catch(err){
        next(err);
    }
}

exports.updateTask = async (req, res, next) => {
    try{
        //check admin id
        const adminId = req.user.user.role_id;
        if (adminId !== 1){
            return res.status(401).json({
                message: 'You are not authorized to perform this action'
            })
        }
        //check if task is not existing
        const taskId = req.params.id;
        if (!await taskModel.getTaskById(taskId)){
            return res.status(404).json({
                message: 'Task not found'
            })
        }

        const {name, description, format} = req.body;
        const taskData = {name, description, format};

        await taskModel.updateTask(taskId, taskData);

        res.status(200).json({
            message: 'Task updated successfully',
        })
    }catch(err){
        next(err);
    }
}

exports.deleteTask = async (req, res, next) => {
    try{
        //check admin id
        const adminId = req.user.user.role_id;
        if (adminId !== 1){
            return res.status(401).json({
                message: 'You are not authorized to perform this action'
            })
        }
        //check task is not existing
        const taskId = req.params.id;
        if (!await taskModel.getTaskById(taskId)){
            return res.status(404).json({
                message: 'Task not found'
            })
        }

        await taskModel.deleteTask(taskId);
        res.status(200).json({
            message: 'Task deleted successfully',
        });
    }catch(err){
        next(err);
    }
}

exports.getUserTaskByUserId = async (req, res, next) => {
    try{
        const userId = req.user.user.id;

        const userTask = await taskModel.getUserTaskByUserId(userId);

        const tasks = await taskModel.getAllTasks();

        userTask.map((usertask) => {
            tasks.map((task) => {
                if (task.id === usertask.taskId){
                    task.pass = 'Yes';
                }
            })
        })

        res.status(200).json({
            tasks,
        })
    }catch(err){
        next(err);
    }
}