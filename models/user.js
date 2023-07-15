const db = require('../database/db');
const bcrypt = require('bcrypt');

exports.createUser = async (userData) => {
    const {
        name,
        email,
        password,
        gender,
    } = userData;

    //hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    const [result] = await db.promise().query('INSERT INTO user (name, email, password, gender, created_at, updated_at) VALUES(?,?,?,?,?,?)', [name, email, hashedPassword, gender, new Date(), new Date()]);
    return result.insertId;
};

exports.getUserByEmail = async (email) => {
    const [rows] = await db.promise().query('SELECT * FROM user WHERE email = ? LIMIT 1', [email]);
    return rows[0];
}

exports.getUserById = async (id) => {
    const [rows] = await db.promise().query('SELECT * FROM user WHERE id =? LIMIT 1', [id]);
    return rows[0];
}

exports.getUserTask = async (taskId, userId) => {
    const [rows] = await db.promise().query('SELECT * FROM user_task WHERE user_id =? AND task_id =? LIMIT 1', [userId, taskId]);
    return rows[0];
}

exports.createUserTask = async (taskId, userId) => {
    await db.promise().query('INSERT INTO user_task (user_id, task_id, pass) VALUES(?,?,?)', [userId, taskId, 'Yes']);
}

exports.addPoint = async (userId) => {
    var trophy = await db.promise().query('SELECT trophy FROM user WHERE id = ? LIMIT 1', [userId]);
    //console.log(trophy[0][0]);
    trophy[0][0].trophy += 10;
    await db.promise().query('UPDATE user SET trophy =? WHERE id =?', [trophy[0][0].trophy, userId]);
}

exports.getAllUsers = async () => {
    const [rows] = await db.promise().query('SELECT name, trophy, id FROM user WHERE role_id = 0 ORDER BY user.trophy DESC;');
    return rows;
}

exports.deleteUser = async (userId) => {
    await db.promise().query('DELETE FROM user WHERE id =?', [userId]);
}