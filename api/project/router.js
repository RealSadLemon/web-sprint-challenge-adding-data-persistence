// build your `/api/projects` router here
const express = require('express');

const model = require('./model');

const router = express.Router();

router.get('/', (req, res) => {
    model.getAllProjects()
        .then(projects => {
            res.status(200).json(projects)
        })
})

module.exports = router