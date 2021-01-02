const UserService = require('../users/UserService');

class AuthController{
    
    constructor(){
        this.init();
        this.userService = new UserService();
    }

    init(){
        this.signin = this.signin.bind(this);  
        this.login  = this.login.bind(this);
        this.logout = this.logout.bind(this);
    }   

    async signin(req, res, next){
        const { body:userModel } = req;
        try{
            const insertedId = await this.userService.insertUser(userModel);
            res.status(insertedId? 201 : 200).json({ insertedId });
        }catch(err){
            next(err);
        }
    }
    async login(req, res, next){
        const { accessToken } = req;
        try{
            res.json({ accessToken });
        }catch(err){
            next(err);
        }
    }

    async logout(req, res, next){}
}

module.exports = AuthController;