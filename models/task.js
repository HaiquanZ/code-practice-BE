const db = require('../database/db');

exports.getAllTasks = async () => {
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

exports.updateTask = async (id, taskData) => {
    const {
        name, description, format
    } = taskData;
    const updateAt = new Date();
    await db.promise().query('UPDATE task SET name = ?, description = ?, format = ?, updated_at = ? WHERE id = ?', [name, description, format, updateAt, id]);
}

exports.deleteTask = async (id) => {
    await db.promise().query('DELETE FROM task WHERE id =?', [id]);
}

exports.getUserTaskByUserId = async (userId) => {
    const [rows] = await db.promise().query('SELECT task_id, pass FROM user_task WHERE user_id =?', [userId]);
    return rows.map(row => ({
        taskId: row.task_id,
        pass: row.pass
    }));
}