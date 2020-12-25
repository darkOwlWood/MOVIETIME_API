const { MongoClient } = require('mongodb');
const { config } = require('../config');

const USER = encodeURIComponent(config.db_user);
const PASSWORD = encodeURIComponent(config.db_password);
const DB = config.db_name;
const HOST = config.db_host;

const MONGO_URI = `mongodb+srv://${USER}:${PASSWORD}@${HOST}/${DB}?retryWrites=true&w=majority`;

class MongoLib{

    constructor(){
        this.db_name = DB;
        this.pageSize = config.page_size;
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

    selectById(collection,idArray){
        return this.connect()
            .then( db => {
                return db
                    .collection(collection)
                    .find({ id: { '$all': idArray }})
                    .toArray();
            })
    }

    select(collection,query,page){
        return this.connect()
            .then( db => {
                return db
                    .collection(collection)
                    .find(query)
                    .limit(this.pageSize)
                    .skip(this.pageSize*page)
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
                    .find({},{ id: true, _id: false })
                    .sort({ id: -1 })
                    .limit(1);
            })
            .then( result => result.id );
    }
}

module.exports = MongoLib;