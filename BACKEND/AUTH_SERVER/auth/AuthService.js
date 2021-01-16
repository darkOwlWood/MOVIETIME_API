const MongoLib = require('../lib/mongodb');
const { ObjectId } = require('mongodb');
const UserService = require('../users/UserService');
const ApiKeyService = require('../utils/ApiKeyService');

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
        this.apiKeyService = new ApiKeyService();
    }

    async signin(userModel){//<<---
        const insertedId = await this.userService.insertUser(userModel);
        return insertedId;
    }

    async login(userId,verify){ //<<---
        const respData = {};
        const challange = await bcrypt.hash(verify,10);
    
        (await this.userIsLogin(userId)) && (await this.deleteChallange(userId));
        
        const [createDate, updateDate] = [new Date(), new Date()];
        const insertedId = await this.client.insert(this.collection,{ userId, challange, updateDate, createDate });
        respData.code =  insertedId? `${userId}:${verify}` : 0;

        respData.code && (respData.userInfo = await this.userService.getUserInfo(userId));
        
        return respData;
    }

    async logout(code){ //<<---
        const [ userId, verify ] = code.split(':');
        const challange = await this.getUserChallange(userId);
        let resp = 0;

        if((await this.userIsLogin(userId)) && (await bcrypt.compare(verify,challange))){
            resp = await this.deleteChallange(userId);
        }
        return resp;
    }
    
    async generateJWT(code,apiKey){ //<<---
        const [ userId, verify ] = code.split(':');
        const challange = await this.getUserChallange(userId);
        let token = null;

        if((await this.userIsLogin(userId)) && (await bcrypt.compare(verify,challange)) && (await this.apiKeyService.ApikeyExist(apiKey))){
            const updateDate = new Date();
            const scopes = await this.apiKeyService.getApiKeyScopes(apiKey);
            await this.client.update(this.collection,{ challange },{ '$set': { updateDate } });
            token = jwt.sign({ userId, scopes },this.secretJwtAccess,{ expiresIn: this.expiresIn }); 
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