// Write your "actions" router here!
const express = require('express');
const Action = require('./actions-model');
const { validateAction, validateActionId } = require('../middleware/actionsMiddleware')

const router = express.Router();

// Get Action 
router.get('/', (req,res,next)=> {
    Action.get()
    .then(actions => {
        res.status(200).json(actions)
    })
    .catch(next);
})

// Get Action by Id
router.get('/:id', validateActionId, (req,res) => {
    res.json(req.actions)
})
// Post Action
router.post('/', validateAction, (req,res,next) => {
    Action.insert(req.body)
    .then(actions => {
        res.status(201).json(actions);
    })
    .catch(next)
})
// Update PUT Action
router.put('/:id', validateActionId, validateAction, (req,res,next) => {
    Action.update(req.params.id, req.body)
    .then(actions => {
        res.status(200).json(actions)
    })
    .catch(next)
})
// Delete Action
router.delete('/:id', validateActionId, (req,res,next) => {
    Action.remove(req.params.id)
    .then(actions => {
        res.status(200).json(actions)
    })
    .catch(next)
})
module.exports = router;