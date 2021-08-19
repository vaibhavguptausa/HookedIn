const user = require('./user');
const auth = require('./auth');

function init(_coreVars) {
    auth.init(_coreVars);
    user.init(_coreVars);
}

module.exports = {
    init,
    ...user,
    ...auth
}