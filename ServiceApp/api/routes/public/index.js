const router = require('express').Router();

const user = require('./user');

function init(_coreVars) {
    user.init(_coreVars);
}

router.use('/user', user.router);

module.exports = {
    router,
    init
}