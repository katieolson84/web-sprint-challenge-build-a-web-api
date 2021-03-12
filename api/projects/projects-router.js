const express = require('express');
const Project = require('./projects-model');
const Action = require('../actions/actions-model');
const {validateProject, validateProjectId, } = require('../middleware/projectMiddleware');
const { validateAction } = require('../middleware/actionsMiddleware');
// const {validateAction} = require('../middleware/actionsMiddleware');
const router = express.Router();

// Get Project List
router.get('/', (req, res, next) => {
    Project.get()
    .then(projects => {
            res.status(200).json(projects)
        })
    .catch(next)
})

// Get Project by Id
router.get('/:id', validateProjectId, (req,res) => {
    res.json(req.projects)
})

// Post Project
router.post('/', validateProject, (req,res,next) => {
    Project.insert(req.body)
    .then(projects => {
        res.status(201).json(projects)
    })
    .catch(next);
})
// Update Project by ID
router.put('/:id', validateProjectId, validateProject, (req,res,next) => {
    Project.update(req.params.id, req.body)
    .then(projects => {
        res.status(200).json(projects)
    })
    .catch(next)
})

// Delete Project by ID
router.delete('/:id', validateProjectId, (req,res,next) => {
    Project.remove(req.params.id)
    .then(projects => {
        res.status(200).json(projects)
    })
    .catch(next)
})
// Get list of actions for project by project id
router.get('/:id/actions', validateProjectId, (req,res,next) => {
    Project.getProjectActions(req.params.id)
    .then(actions => {
        res.status(200).json(actions)
    })
    .catch(next)
})


module.exports = router;