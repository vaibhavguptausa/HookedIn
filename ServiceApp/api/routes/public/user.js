const router = require('express').Router();

const mw = require('../middleware');
function init(_coreVars) {

}

router.get('/echo/:number', mw.echo, async(req, res) => {
    return res.json({number: req.params.number});
});

module.exports = {
    init,
    router
}