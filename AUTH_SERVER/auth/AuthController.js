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
            const insertedId = await this.authService.signin(userModel);
            res.status(insertedId? 201 : 409).json({ insertedId });
        }catch(err){
            next(err);
        }
    }

    async login(req, res, next){
        const { user: { _id:userId }, body: { verify } } = req;
        try{
            const { userInfo:{ name }, code } = await this.authService.login(userId,verify);
            res.status(code? 201 : 400).json({ name, code });
        }catch(err){
            next(err);
        }
    }

    async generateJWT(req, res, next){
        const { code, apiKey } = req.body;
        try{
            const jwt = await  this.authService.generateJWT(code, apiKey);
            res.status(jwt? 201: 400).json({ jwt });
        }catch(err){
            next(err);
        }
    }

    async logout(req, res, next){
        const { code } = req.body;
        try{
            const deletedCount = await this.authService.logout(code);
            res.status(204).json({ deletedCount });
        }catch(err){
            next(err);
        }
    }
}

module.exports = AuthController;