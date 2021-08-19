const router = require('express').Router();

const middleware = require('./middleware');
const publicRoutes = require('./public');
const privateRoutes = require('./private');

function init(_coreVars) {
    middleware.init(_coreVars);
    publicRoutes.init(_coreVars);
    privateRoutes.init(_coreVars);

    router.use('/public', publicRoutes.router);
    router.use('/private', privateRoutes.router);
}

module.exports = {
    router,
    init
}