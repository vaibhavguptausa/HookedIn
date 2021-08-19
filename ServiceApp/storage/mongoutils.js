const MongoClient = require("mongodb").MongoClient;
const Promise = require("bluebird");

var client;
var db;
function init(_coreVars) {

}

function connect() {
    return new Promise((resolve, reject) => {
        let uri = process.env.MONGO_URI;
        MongoClient.connect(uri,{useUnifiedTopology:true, useNewUrlParser:true}, (err,_client) => {
            if(err) {
                console.log(err);
                return reject({err:{msg:err}});
            }
            client = _client;
            db = _client.db();
            console.log("MongoDB Connection Successful");
            return resolve({data:{}});
        })
    })
}

function getDb() {
    return db;
}

function disconnct() {
    if(client) {
        client.close();
        console.log("MongoDB connection closed!")
    }
}

module.exports = {
    init: init,
    connect: connect,
    getDb: getDb,
    disconnct: disconnct
}