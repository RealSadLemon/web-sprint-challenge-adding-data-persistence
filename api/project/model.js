const db = require('../../data/dbConfig');

// build your `Project` model here

async function getAllProjects() {
    const projects = await db('projects')
    return projects.map(project => {
        return ({
            project_id: project.project_id,
            project_name: project.project_name,
            project_description: project.project_description,
            project_completed: !!project.project_completed
        })
    })
    
}

module.exports = {
    getAllProjects
}