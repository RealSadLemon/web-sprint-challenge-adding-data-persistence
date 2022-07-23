const validateProject = (req, res, next) => {
    if(typeof req.body.project_name !== 'string' || req.body.project_name.trim() === ''){
        res.status(400).json({message: 'project_name missing, field required.'})
        return;
    } else {
        next();
    }
}

module.exports = {
    validateProject
}