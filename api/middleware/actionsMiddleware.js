const Action = require('../actions/actions-model');

const validateActionId= async( req,res,next) => {
    try{
        const actions = await Action.get(req.params.id)
        if(!actions) {
            res.status(404).json({
                message: "Action not found"
             })
         }else{
             req.actions = actions
             next()
         }
     }catch (err) {
         next(err)
     }
 };

const validateAction = (req, res, next) => {
    if(!req.body) {
        res.status(400).json({message: "missing action data"})
    }else if
        (!req.body.description || !req.body.notes){
            res.status(400).json({message: "missing required description and notes"})
    }else{
         next()
        }
    }

module.exports = {
    validateActionId,
    validateAction,
}