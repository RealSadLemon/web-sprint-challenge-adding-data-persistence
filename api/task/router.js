// build your `/api/tasks` router here
const express = require('express');

const model = require('./model');

const { taskValidator } = require('./middleware');

const router = express.Router();

router.get('/', (req, res) => {
    model.getAllTasks()
        .then(tasks => {
            res.status(200).json(tasks)
        })
});

router.post('/', taskValidator, (req, res) => {
    model.createTask(req.body)
        .then(task => {
            res.status(201).json(task)
        })
})

module.exports = router;