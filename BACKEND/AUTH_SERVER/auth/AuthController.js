
class AuthController{
    
    constructor(){
        this.init();
    }

    init(){
        this.signin = this.signin.bind(this);
        this.login  = this.login.bind(this);
        this.logout = this.logout.bind(this);
    }   

    async signin(req, res, next){}
    async login(req, res, next){}
    async logout(req, res, next){}
}

module.exports = AuthController;