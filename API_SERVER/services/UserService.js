const MongoLib = require('../lib/mongodb');
const { ObjectId } = require('mongodb');

class UserService{
    constructor(){
        this.collection = 'users';
        this.client = new MongoLib();
    }

    async userExist(userId){
        return Boolean(await this.client.getToTalDocuments(this.collection,{ _id:ObjectId(userId) }));
    }
}

module.exports = UserService;