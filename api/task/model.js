const db = require('../../data/dbConfig')

// build your `Task` model here
async function getAllTasks() {
    const tasks = await db('tasks as tsks')
        .select('tsks.task_id', 'tsks.task_description', 'tsks.task_notes', 'tsks.task_completed', 'pr.project_name', 'pr.project_description')
        .leftJoin('projects as pr', 'tsks.project_id', 'pr.project_id')
        .groupBy('tsks.task_id')
        .orderBy('tsks.task_id', 'asc')
    return tasks.map(task => {
        return ({
            ...task,
            task_completed: !!task.task_completed
        })
    })
}

module.exports = {
    getAllTasks
}