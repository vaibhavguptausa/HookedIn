function init(_coreVars) {

}

async function isAuthorized(req, res, next) {
    return res.sendStatus(403);
}

module.exports = {
    init,
    isAuthorized,
}