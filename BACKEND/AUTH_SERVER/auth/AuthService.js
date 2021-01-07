const MongoLib = require('../lib/mongodb');
const { ObjectId } = require('mongodb');
const UserService = require('../users/UserService');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { config } = require('../config');

class AuthService{

    constructor(){
        this.collection = 'challange';
        this.client = new MongoLib();
        this.secretJwtAccess = config.secretJwtAccess;
        this.expiresIn = '900000ms';
        this.userService = new UserService();
    }

    async signin(userModel){//<<---
        const insertedId = await this.userService.insertUser(userModel);
        return insertedId;
    }

    async login(userId,verify){ //<<---
        const challange = await bcrypt.hash(verify,10);
    
        (await this.userIsLogin(userId)) && (await this.deleteChallange(userId));
        
        const insertedId = await this.client.insert(this.collection,{ userId, challange });
        const code =  insertedId? `${userId}:${verify}` : 0;
        return code;
    }

    async logout(code){ //<<---
        const [ userId, verify = '' ] = code.split(':');
        const challange = await this.getUserChallange(userId);
        let resp = 0;

        if((await this.userIsLogin(userId)) && (await bcrypt.compare(verify,challange))){
            resp = await this.deleteChallange(userId);
        }
        return resp;
    }
    
    async generateJWT(code){ //<<---
        const [ userId, verify = '' ] = code.split(':');
        const challange = await this.getUserChallange(userId);
        let token = {};

        if((await this.userIsLogin(userId)) && (await bcrypt.compare(verify,challange))){
            token = jwt.sign({ userId },this.secretJwtAccess,{ expiresIn: this.expiresIn }); 
        }

        return token;
    }

    async userIsLogin(userId){
        return Boolean(await this.getUserChallange(userId));
    }

    async deleteChallange(userId){
        const deletedCount = await this.client.delete(this.collection,{ userId: ObjectId(userId) });
        return deletedCount;
    }

    async getUserChallange(userId){
        const [ data ] = await this.client.selectById(this.collection,{ userId: ObjectId(userId) });
        return data? data.challange : 0;
    }

}

module.exports = AuthService;