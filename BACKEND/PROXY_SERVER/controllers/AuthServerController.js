const axios = require('axios');
const crypto = require('crypto');
const { config } = require('../config');

const httpOnly = Boolean(config.http_only);
const maxAge   = parseInt(config.max_age); 
const path     = config.path; 
const secure   = Boolean(config.secure); 
const signed   = Boolean(config.signed);

class AuthServerController{
    
    constructor(){
        this.cookieName = 'idprot';
        this.URL = `${config.protocol}://${config.auth_server}`;
        this.cookieOptions = { httpOnly, maxAge, path, secure, signed };
        this.init();
    }

    init(){
        this.signin      = this.signin.bind(this);
        this.login       = this.login.bind(this);
        this.generateJWT = this.generateJWT.bind(this);
        this.logout      = this.logout.bind(this);
    }

    async signin(req, res, next){
        try{
            const { body:userModel } = req;
            const endpoint = 'auth/signin';

            const resp = await axios.post(`${this.URL}/${endpoint}`,{ ...userModel });
            const { insertedId } = resp.data;

            res.status(201).json({ insertedId });
        }catch(err){
            next(err);
        }
    }

    async login(req, res, next){
        try{
            const basic = req.get('Authorization');
            const endpoint = 'auth/login';
            const verify = crypto.randomBytes(20).toString("hex");
            
            const resp = await axios.post(`${this.URL}/${endpoint}`, { verify }, { headers:{ Authorization:basic } });
            const { code } = resp.data;

            res
                .cookie(this.cookieName, { code }, this.cookieOptions)
                .status(201).json({ message: 'sucess' });
        }catch(err){
            next(err);
        }
    }

    async generateJWT(req, res, next){
        try{
            const { code } = req.signedCookies[this.cookieName];
            const endpoint = 'auth/token';

            const resp = await axios.post(`${this.URL}/${endpoint}`,{ code });
            const { jwt } = resp.data;

            res
                .cookie(this.cookieName,{ code, jwt },this.cookieOptions)
                .status(201).json({ message: 'sucess' });
        }catch(err){
            next(err);
        }
    }

    async logout (req, res, next){
        try{
            const { code } = req.signedCookies[this.cookieName];
            const endpoint = 'auth/logout';
            
            const resp = await axios.delete(`${this.URL}/${endpoint}`,{ data: { code } });

            res
                .clearCookie(this.cookieName)
                .status(200).json({ message: 'sucess' });
        }catch(err){
            next(err);
        }
    }
}

module.exports = AuthServerController;