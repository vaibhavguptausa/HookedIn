require('dotenv').config();
const Promise  = require('bluebird');
const http  = require('http');
const https = require('https');
const express = require('express');

const settings = require('./config/settings');
const api = require('./api');
const storage = require('./storage');

const app = express();
let server;
let coreVars = {};

async function initCoreModules() {
    if(settings.https.enabled) {
        server = http.createServer(settings.https,(req, res) => {app(req,res)});
    }
    else {
        server = http.createServer((req, res) => {app(req,res)});
        server.setMaxListeners(0);
    }
    coreVars.settings = settings;
    storage.init(coreVars);
    api.init(server, coreVars);
    app.use('/', api.coreApp);
}

async function startCoreModules() {
    await storage.connect();
    server.on('error', (err) => {
        console.log(err);
        process.exit(1);
    });
    server.listen(settings.listen.port, settings.listen.url, () => {
        process.title = 'HookedIn Web Server';
        console.log("Server listening on: "+settings.listen.port);
    });
}
initCoreModules().then(()=>{
    startCoreModules();
})

