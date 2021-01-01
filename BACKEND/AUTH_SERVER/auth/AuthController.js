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
            const code = insertedId? 201 : 200;
            const message = insertedId? 'Register complete' : 'Email already used'; 
            res.status(code).json({ message });
        }catch(err){
            next(err);
        }
    }
    async login(req, res, next){}
    async logout(req, res, next){}
}

module.exports = AuthController;