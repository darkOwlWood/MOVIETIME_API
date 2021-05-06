const passport = require('passport');
const boom = require('@hapi/boom');
const { BasicStrategy } = require('passport-http');
const UserService = require('../../users/UserService');
const userService = new UserService();

passport.use('basic', new BasicStrategy( async (email, password, done) => {
    try{
        if(!(await userService.isUserInDB(email))){
            done(boom.unauthorized());
            return;
        }
    
        if(!(await userService.checkUserPassword(email,password))){
            done(boom.unauthorized());
            return;
        }
    
        const userModel = await userService.getUserByEmail(email);
        delete userModel.password;
        done(null, userModel);
    }catch(err){
        done(err);
    }
}));