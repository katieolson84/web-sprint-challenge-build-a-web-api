const Project = require('../projects/projects-model');

function logger (req, res, next) {
    const timestamp = new Date()
    const method = req.method;
    const url = req.url;
    const log = `${method}:${url}:${timestamp}`
    console.log(log)
    next()
   }
   
   const validateProjectId= async( req,res,next) => {
       try{
           const projects = await Project.get(req.params.id)
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
    
    const validateProject= (req, res, next) => {
        if(!req.body) {
            res.status(400).json({message: "missing project data"})
            
        }else if
            (!req.body.name || !req.body.description) {
            res.status(400).json({message: "Missing required name and description"})
        }else{
            next()
            }
        }

module.exports = {
    logger,
    validateProject,
    validateProjectId,
}