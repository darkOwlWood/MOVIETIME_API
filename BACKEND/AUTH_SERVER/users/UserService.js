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
            result = await this.client.insert(this.collection,userModel);
            delete userModel.password;
        }
        return result;
    }

    async isUserInDB(email){
        return Boolean(await this.client.getTotalDocumetns(this.collection,{ email }));
    }

    async getUserByEmail(email){
        const [ data ] = await this.client.selectById(this.collection,{ email });
        return data;
    }

    async checkUserPassword(email,password){
        const userModel = await this.getUserByEmail(email);
        const result = await bcrypt.compare(password,userModel.password);
        delete userModel.password;
        return result;
    }
}

module.exports = UserService;