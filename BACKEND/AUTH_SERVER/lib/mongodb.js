const { MongoClient } = require('mongodb');
const { config } = require('../config');

const USER =     config.dbUser;
const PASSWORD = config.dbPassword;
const HOST =     config.dbHost;
const DB =       config.dbName;

const MONGO_URI = config.dev ? `mongodb://${HOST}/${DB}` : `mongodb+srv://${USER}:${PASSWORD}@${HOST}/${DB}?retryWrites=true&w=majority`;

class MongoLib {

    constructor() {
        this.dbName = DB;
        this.client = MongoClient(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });
    }

    connect() {
        if (!MongoLib.connection) {
            MongoLib.connection = new Promise((resolve, reject) => {
                this.client.connect(err => {
                    if (err) {
                        console.error(err);
                        reject(err);
                        return;
                    }
                    console.log('Connection was made successfully!!!');
                    resolve(this.client.db(this.dbName));
                });
            });
        }
        return MongoLib.connection;
    }

    selectById(collection, query) {
        return this.connect()
            .then(db => {
                return db
                    .collection(collection)
                    .find(query)
                    .toArray();
            });
    }

    insert(collection, data) {
        return this.connect()
            .then(db => {
                return db
                    .collection(collection)
                    .insertOne(data);
            })
            .then(result => result.insertedId);
    }

    delete(collection, query) {
        return this.connect()
            .then(db => {
                return db
                    .collection(collection)
                    .deleteOne(query);
            })
            .then(result => result.deletedCount);
    }

    update(collection, query, data) {
        return this.connect()
            .then(db => {
                return db
                    .collection(collection)
                    .updateOne(query, data);
            })
            .then(result => result.modifiedCount);
    }

    getTotalDocumetns(collection, query) {
        return this.connect()
            .then(db => {
                return db
                    .collection(collection)
                    .find(query)
                    .count();
            });
    }
}

module.exports = MongoLib;