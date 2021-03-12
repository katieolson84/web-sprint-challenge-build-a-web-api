const express = require('express');
const Project = require('./projects-model');
const Action = require('../actions/actions-model');
const {validateProject, validateProjectId, validateAction, validateProjectUpdate} = require('../middleware/projectMiddleware');

const router = express.Router();

// Get Project List
router.get('/', (req,res, next) => {
    Project.get(req.query)
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

// Get list of actions for project by project id

module.exports = router;