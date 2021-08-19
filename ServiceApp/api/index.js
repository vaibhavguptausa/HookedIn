const express = require('express');
const helmet = require('helmet');
const routes = require('./routes');

let settings;
let coreApp;

function errorHandler(err, req, res, next) {
    res.status(500).json({error: JSON.parse(err)});
}

function init(_server, _coreVars) {
    settings = _coreVars.settings;
    routes.init(_coreVars);

    coreApp = express();
    coreApp.use(helmet());
    coreApp.use(express.json({limit: "250mb"}));
    coreApp.use(express.urlencoded({extended: true}));
    coreApp.use('/api/v1/',routes.router);
    coreApp.use('/', (req, res) => {
        return res.status(200).header({'Content-Type':'text/plain'}).end('KinkedIn...\n');
    })
    coreApp.use(errorHandler);
}

module.exports = {
    init,
    get coreApp() {return coreApp;}
}