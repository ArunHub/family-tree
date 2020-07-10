const { URL, DB, COLLECTION, MONGO_OPTIONS, sample } = require('./constants');

const MongoClient = require("mongodb").MongoClient;

function getData() {
    return new Promise((resolve, reject) => {
        let client = MongoClient.connect(URL, MONGO_OPTIONS);
        client.then((res) => {
            let db = res.db(DB);
            let coll = db.collection(COLLECTION);
            let result = coll.find().toArray();
            result.then(g => {
                resolve(g);
            })
        }).catch(reason => {
            console.log('Error on DB fetching: ', reason);
            reject(reason);
        })
    })
}

function insertDocument() {
    let client = MongoClient.connect(URL, MONGO_OPTIONS);
    client.then((res) => {
        let db = res.db(DB);
        let coll = db.collection(COLLECTION);
        let result = coll.insert(sample);
        result.then(t => {
            console.log('tttttttt', t)
        })
    }).catch(reason => {
        console.log('Error on DB fetching: ', reason);
        reject(reject);
    })
}

module.exports = { getData, insertDocument };