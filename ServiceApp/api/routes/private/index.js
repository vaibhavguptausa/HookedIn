const router = require('express').Router();

const user = require('./user');
const mw = require('../middleware');

function init(_coreVars) {
    user.init(_coreVars);
}

router.use('/user', mw.isAuthorized, user.router);

module.exports = {
    router,
    init
}