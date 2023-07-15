const db = require('../database/db');

exports.getTestByTaskId = async (taskId) => {
    const [rows] = await db.promise().query('SELECT * FROM test WHERE task_id = ?', [taskId]);
    return rows.map((row) => ({
        input: row.input,
        output: row.output
    }))
}

exports.createTest = async (taskId, input, output) => {
    const [result] = await db.promise().query('INSERT INTO test (task_id, input, output) VALUES (?,?,?)', [taskId, input, output]);
    return result.insertId;
}