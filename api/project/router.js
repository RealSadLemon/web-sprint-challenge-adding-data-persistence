// build your `/api/projects` router here
const express = require('express');

const model = require('./model');

const { validateProject } = require('./middleware')

const router = express.Router();

router.get('/', (req, res) => {
    model.getAllProjects()
        .then(projects => {
            res.status(200).json(projects)
        })
})

router.post('/', validateProject, (req, res, next) => {
    model.createProject(req.body)
        .then(project => {
            res.status(201).json(project)
        })
})

module.exports = router