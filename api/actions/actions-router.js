// Write your "actions" router here!
const express = require('express');
const Action = require('./actions-model');
const { validateAction } = require('../middleware/middleware')

const router = express.Router();

// Get Action 
router.get('/:id/actions', validateAction, (req,res,next)=> {
    Action.find(req.query)
    .then(actions => {
        res.status(200).json(actions)
    })
    .catch(next);
    // .catch(err => {
    //     res.status(500).json({
    //         message: "The action information could not be retrieved", err
    //     })
    // })
})

// Get Action by Id

// Post Action

// Update PUT Action

// Delete Action

module.exports = router;