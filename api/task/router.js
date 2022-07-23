// build your `/api/tasks` router here
const express = require('express');

const model = require('./model');

const {  } = require('./middleware');

const router = express.Router();

router.get('/', (req, res) => {
    model.getAllTasks()
        .then(tasks => {
            res.status(200).json(tasks)
        })
});

module.exports = router;