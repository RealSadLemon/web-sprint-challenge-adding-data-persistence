// build your `Resource` model here
const db = require('../../data/dbConfig');

function getAllResources(){
    return db('resources')
}

module.exports = {
    getAllResources,
}