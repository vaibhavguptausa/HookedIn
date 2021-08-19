const mongoUtils = require('./mongoutils');

function init(_coreVars) {
    mongoUtils.init(_coreVars);
}

module.exports = {
    init,
    ...mongoUtils
}