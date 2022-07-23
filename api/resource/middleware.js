const db = require('../../data/dbConfig');

async function resourceValidator(req, res, next) {
    if(typeof req.body.resource_name !== 'string' || req.body.resource_name.trim() === ''){
        res.status(400).json({message: 'resource_name missing, this is required'})
        return;
    } else {
        const matchingResource = await db('resources').where('resource_name', req.body.resource_name).first()
        if(typeof matchingResource.resource_name !== 'string'){
            next();
        } else {
            res.status(400).json({message: 'resource_name already exists in database, try a different one.'})
            return;
        }
    }
}