const MongoLib = require('../lib/mongodb');
const bcrypt = require('bcrypt');

class UserService{

    constructor(){
        this.collection = 'users';
        this.client = new MongoLib();
    }

    async insertUser(userModel){
        let result = '';
        if(!(await this.isUserInDB(userModel.email))){
            userModel.password = await bcrypt.hash(userModel.password,10);
            result = this.client.insert(this.collection,userModel);
            delete userModel.password;
        }
        return result;
    }

    async isUserInDB(email){
        return Boolean(await this.client.getTotalDocumetns(this.collection,{ email }));
    }
}

module.exports = UserService;