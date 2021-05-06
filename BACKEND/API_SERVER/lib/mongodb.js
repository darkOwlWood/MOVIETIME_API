const { MongoClient } = require('mongodb');
const { config } = require('../config');

const USER = encodeURIComponent(config.dbUser);
const PASSWORD = encodeURIComponent(config.dbPassword);
const DB = config.dbName;
const HOST = config.dbHost;

const MONGO_URI = config.dev ? `mongodb://${HOST}/${DB}` : `mongodb+srv://${USER}:${PASSWORD}@${HOST}/${DB}?retryWrites=true&w=majority`;

class MongoLib{

    constructor(){
        this.db_name = DB;
        this.client = MongoClient(MONGO_URI, { useNewUrlParser: true,  useUnifiedTopology: true });
    }

    connect(){
        if(!MongoLib.connect){
            MongoLib.connect = new Promise( (resolve, reject) => {
                this.client.connect( err => {
                    if(err){
                        console.error(err);
                        reject(err);
                        return;
                    }

                    console.log('Connected successfully!!!');
                    resolve(this.client.db(this.db_name));
                })
            });
        }
        return MongoLib.connect;
    }

    selectById(collection,query){
        return this.connect()
            .then( db => {
                return db
                    .collection(collection)
                    .find(query)
                    .toArray();
            })
    }

    select(collection,query,pageSize,pageNo){
        return this.connect()
            .then( db => {
                return db
                    .collection(collection)
                    .find(query, { projection: { _id: false } })
                    .limit(pageSize)
                    .skip(pageSize*pageNo)
                    .toArray();
            });
    }

    insert(collection,data){
        return this.connect()
            .then( db => {
                return db
                    .collection(collection)
                    .insertOne(data);
            })
            .then( result => result.insertedId );
    }
    
    update(collection,id,data){
        return this.connect()
            .then( db => {
                return db
                    .collection(collection)
                    .updateOne({ id },{ '$set': data },{ upsert: true });
            })
            .then( result => result.modifiedCount );
    }
    
    delete(collection,id){
        return this.connect()
            .then( db => {
                return db
                    .collection(collection)
                    .deleteOne({ id });
            })
            .then( result => result.deletedCount );
    }

    getTheLastId(collection){
        return this.connect()
            .then( db => {
                return db
                    .collection(collection)
                    .find({},{ projection: { id: true, _id: false } })
                    .sort({ id: -1 })
                    .limit(1)
                    .toArray();
            })
            .then( result => result[0]? result[0].id : 0 );
    }

    getToTalDocuments(collection,query){
        return this.connect()
            .then( db => {
                return db 
                    .collection(collection)
                    .find(query)
                    .count();
            });
    }
}

module.exports = MongoLib;