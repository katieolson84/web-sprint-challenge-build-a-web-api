const Project = require('../projects/projects-model');

const validateProject= (req, res, next) => {
    if(!req.body) {
        res.status(400).json({message: "missing project data"})
    }else{
        if (!req.body.name || !req.body.description) {
        res.status(400).json({message: "Missing required name and description"})
        }else{
            next()
        }
    }
}

const validateProjectId= async( req,res,next) => {
    try{
        const projects = await Project.getById(req.params.id)
        if(!projects) {
            res.status(404).json({
                message: "Project not found"
            })
        }else{
            req.projects = projects
            next()
        }
    }catch (err) {
        next(err)
    }
};

// const validateProjectUpdate= async (req,res,next) => {
//     const {id} = req.params
//     const changes = req.body
//     try{
//         if(!changes.name || !changes.description) {
//             res.status(400).json({message: 'Name and Description are require'})
//         }else{
//             const updatedProject = await Project.update(id, changes)
//             if(!updatedProject){
//                 res.status(404).json({message: 'The projects with the specified ID does not exist!'})
//             }else{
//                 res.json(updatedProject)
//             }
//         }
//     }catch(err) {
//         next(err)
//     }
// }

const validateAction = (req, res, next) => {
    if(!req.body) {
        res.status(400).json({message: "missing action data"})
    }else{
        if(!req.body.description || !req.body.notes){
            res.status(400).json({message: "missing required description and notes"})
        }else{
            next()
        }
    }
}

module.exports = {
    validateProject,
    validateProjectId,
    validateAction,
    // validateProjectUpdate
}