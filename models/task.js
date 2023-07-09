const db = require('../database/db');

exports.getAllTasks = async (req, res, next) => {
    const [rows] = await db.promise().query('SELECT * FROM task');
    return rows.map(row => ({
        id: row.id,
        name: row.name,
        description: row.description,
        format: row.format
    }));
};

exports.getTaskById = async (id) => {
    const [rows] = await db.promise().query('SELECT * FROM task WHERE id = ? LIMIT 1', [id]);
    return rows[0];
}

exports.createTask = async (taskData) => {
    const {
        name, description, format
    } = taskData;

    const [result] = await db.promise().query('INSERT INTO task (name, description, format, created_at, updated_at) VALUES (?,?,?,?,?)', [name, description, format,new Date(), new Date()]);
    return result.insertId;
}