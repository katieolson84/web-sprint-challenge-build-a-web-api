const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const helmet = require('helmet');
const server = express();

// pull in Routes
const actionsRouter = require('./actions/actions-router');
const projectsRouter = require('./projects/projects-router');
// const mw = require('./middleware/middleware');

// use 
server.use(express.json());
server.use(morgan("dev"));
server.use(helmet());
server.use(cors());


server.use('/api/actions', actionsRouter);
server.use('/api/projects', projectsRouter);

server.use("/", (req,res) => {
    res.json("Project Api")
})
// middleware
server.use((err, req, res, next) => {
    res.status(500).json({
        message: err.message,
        stack: err.stack,
        custom: "Something is terribly wrong"
    })
})
// export
module.exports = server;