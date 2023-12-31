const userModel = require('../models/user');
var validator = require("email-validator");
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const JWT_SECRET = process.env.JWT_SECRET;

exports.login = async (req, res, next) => {
    try{
        const {
            email, password
        } = req.body;

        //check if email is not already exist
        const user = await userModel.getUserByEmail(email);
        if (!user) {
            return res.status(401).json({
                message: 'Email is not existing'
            });
        }

        //compare password and hashedPassword
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(401).json({
                message: 'Password is incorrect'
            });
        }

        //jwt authentication
        const token = jwt.sign({
            user: user,
        }, JWT_SECRET);

        //login success
        res.status(200).json({
            message: 'Login success',
            token,
            id: user.id,
            name: user.name,
            email: user.email,
            gender: user.gender,
            trophy: user.trophy,
            rank: user.rank,
            role_id: user.role_id
        });
    }catch(err){
        next(err);
    }
}

exports.register = async (req, res, next) => {
    try{
        const{
            name,
            email,
            password,
            gender
        } = req.body;

        const user = {
            name,
            email,
            password,
            gender
        }

        //check if the user already exists
        const existingUser = await userModel.getUserByEmail(email);
        if (existingUser) {
            return res.status(409).json({
                message: 'User already exists'
            });
        }
        await checkValidUser(user);

        const userID = await userModel.createUser(user);

        res.status(200).json({
            message: 'User created successfully',
            userID,
        });
    }catch (err){
        next(err);
    }
};

exports.getUserById = async (req, res, next) => {
    try{
        const id = req.params.id;
        const user = await userModel.getUserById(id);

        if (!user) {
            return res.status(404).json({
                message: 'User not found'
            });
        }
        res.status(200).json({
            userId: user.id,
            name: user.name,
        })
    }catch(err){
        next(err);
    }
}

exports.addPoint = async (req, res, next) => {
    try{
        const userId = req.user.user.id;
        const taskId = req.body.taskId;

        //console.log(req);

        const user_task = await userModel.getUserTask(taskId, userId);
        if (!user_task){
            await userModel.createUserTask(taskId, userId);
            await userModel.addPoint(userId);
            res.status(200).json({
                message: 'Point added successfully'
            })
        }else{
            res.status(200).json({
                message: 'User have already passed the task'
            })
        }
    }catch(err){
        next(err);
    }
}

exports.getAllUsers = async (req, res, next) => {
    try{
        const users = await userModel.getAllUsers();

        res.status(200).json({
            users,
        })
    }catch(err){
        next(err);
    }
}

exports.deleteUser = async (req, res, next) => {
    try{
        //check is admin
        if (req.user.user.role_id !== 1) {
            return res.status(401).json({
                message: 'You are not admin'
            });
        }else{
            const id = req.params.id;
            await userModel.deleteUser(id);
            res.status(200).json({
                message: 'User deleted successfully'
            })
        }
    }catch(err){
        next(err);
    }
}

async function checkValidUser(user) {

    if (!validator.validate(user.email)) {
        throw new Error('Invalid email')
    }
}
