// build your `/api/resources` router here
const express = require('express');

const model = require('./model')

const { resourceValidator } = require('./middleware')

const router = express.Router()

router.get('/', (req, res) => {
    model.getAllResources()
        .then(resources => {
            res.status(200).json(resources)
        })
})

router.post('/', resourceValidator, (req, res, next) => {
    model.createResource(req.body)
        .then(resource => {
            res.status(201).json(resource)
        })
})

module.exports = router;