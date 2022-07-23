const db = require('../../data/dbConfig');

async function taskValidator(req, res, next) {
    if(typeof req.body.task_description !== 'string' || req.body.task_description.trim() === ''){
        res.status(400).json({message: 'task_description required'})
        return;
    } else if (typeof req.body.project_id !== 'number'){
        res.status(400).json({message: 'project_id required'})
        return;
    } else {
        const projectExists = await db('projects').where('project_id', req.body.project_id).first()
        if(projectExists != null){
            next();
        } else {
            res.status(400).json(projectExists)
            return;
        }
    }
}

module.exports = {
    taskValidator
}