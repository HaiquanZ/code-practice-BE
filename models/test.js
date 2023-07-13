const db = require('../database/db');

exports.getTestByTaskId = async (taskId) => {
    const [rows] = await db.promise().query('SELECT * FROM test WHERE task_id = ?', [taskId]);
    return rows.map((row) => ({
        input: row.input,
        output: row.output
    }))
}