const db = require('../database/db');

exports.createComment = async (comment, userId, taskId) => {
    const [result] = await db.promise().query('INSERT INTO comment (content, user_id, task_id, created_at, updated_at) VALUES(?,?,?,?,?)',[comment, userId, taskId, new Date(), new Date()]);
    return result.insertId;
}

exports.getCommentByTaskId = async (taskId) => {
    const [rows] = await db.promise().query('SELECT `comment`.`id`, `user`.`name`, `comment`.`content`, `comment`.`created_at` FROM `user`, `comment` WHERE `user`.`id` = `comment`.`user_id` AND `comment`.`task_id` = ? ORDER BY `created_at` DESC;', [taskId]);
    return rows.map((row) => ({
        commentid: row.id,
        name: row.name,
        comment: row.content
    }))
}

exports.getAllComments = async () => {
    const [rows] = await db.promise().query('SELECT `comment`.`id`, `user`.`name` AS `user_name`, `comment`.`content`, `task`.`name` AS `task_name` FROM `user`, `comment`, `task` WHERE `user`.`id` = `comment`.`user_id` AND `task`.`id` = `comment`.`task_id` ORDER BY `comment`.`id` DESC;');
    console.log(rows);
    return rows.map((row) => ({
        commentid: row.id,
        userName: row.user_name,
        comment: row.content,
        taskName: row.task_name
    }))
}

exports.updateComment = async (comment, id) => {
    await db.promise().query('UPDATE comment SET content = ?, updated_at = ? WHERE id = ?',[comment, new Date(),id]);
}

exports.deleteComment = async (id) => {
    await db.promise().query('DELETE FROM comment WHERE id =?',[id]);
}