const AuthService = require('./AuthService');

class AuthController{
    
    constructor(){
        this.init();
        this.authService = new AuthService();
    }

    init(){
        this.signin       = this.signin.bind(this);  
        this.login        = this.login.bind(this);
        this.generateJWT  = this.generateJWT.bind(this);
        this.logout       = this.logout.bind(this);
    }   

    async signin(req, res, next){
        const { body:userModel } = req;
        try{
            const insertedId = await this.AuthService.signin(userModel);
            res.status(insertedId? 201 : 200).json({ insertedId });
        }catch(err){
            next(err);
        }
    }

    async login(req, res, next){
        const { user: { _id:userId }, body: { verify } } = req;
        try{
            const code = await this.authService.login(userId,verify);
            res.json({ code });
        }catch(err){
            next(err);
        }
    }

    async generateJWT(req, res, next){
        const { code } = req.body;
        try{
            const jwt = await  this.authService.generateJWT(code);
            res.json({ jwt });
        }catch(err){
            next(err);
        }
    }

    async logout(req, res, next){
        const { code } = req.body;
        try{
            const deletedCount = await this.authService.logout(code);
            res.status(deletedCount? 204 : 501).json({ deletedCount });
        }catch(err){
            next(err);
        }
    }
}

module.exports = AuthController;