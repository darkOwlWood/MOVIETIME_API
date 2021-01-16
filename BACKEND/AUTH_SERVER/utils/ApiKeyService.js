const MongoLib = require('../lib/mongodb');

class ApiKeyService{
    constructor(){
        this.client = new MongoLib();
        this.collection = 'api.keys';
    }

    async ApikeyExist(token){
        return Boolean(await this.client.getTotalDocumetns(this.collection,{ token }));
    }

    async getApiKeyScopes(token){
        const [ apiKeyData ] = await this.client.selectById(this.collection,{ token });
        return apiKeyData.scopes;
    }
}

module.exports = ApiKeyService;