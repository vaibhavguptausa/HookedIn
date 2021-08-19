const fs = require('fs-extra');
module.exports = {
    https: {
        enabled: false,
        //cert : fs.readFileSync("hookedin.crt");
        //key : fs.readFileSync("hookenin.pem");
    },
    listen: {
        url: "0.0.0.0",
        port: 80
    }
}