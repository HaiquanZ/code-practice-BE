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