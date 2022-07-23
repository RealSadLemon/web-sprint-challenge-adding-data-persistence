// build your `/api/resources` router here
const express = require('express');

const model = require('./model')

const router = express.Router()

router.get('/', (req, res) => {
    model.getAllResources()
        .then(resources => {
            res.status(200).json(resources)
        })
})

module.exports = router;