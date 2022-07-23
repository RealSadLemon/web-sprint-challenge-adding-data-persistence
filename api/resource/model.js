// build your `Resource` model here
const db = require('../../data/dbConfig');

function getAllResources(){
    return db('resources')
}

async function createResource(resource) {
    const resourceId = await db('resources').insert(resource);
    const createdResource = await db('resources').where('resource_id', resourceId).first();
    return createdResource;
}

module.exports = {
    getAllResources,
    createResource
}