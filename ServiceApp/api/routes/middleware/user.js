const {param} = require('express-validator');

module.exports = {
    echo: [
        param('number').exists({checkNull: true, checkFalsy: true}).notEmpty().isNumeric()
    ]
}