const passport = require('passport');
const { Strategy, ExtractJwt } = require('passport-jwt');
const { config } = require('../../config');
const UserService = require('../../services/UserService');
const userService = new UserService();

passport.use(new Strategy(
    {
        secretOrKey: config.secretJwtAccess,
        jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    },
    async (jwtPayload, done) => {
        try{
            if(!(await userService.userExist(jwtPayload.userId))){
                done(null, false);
                return;
            }

            done(null,{ scopes:jwtPayload.scopes });

        }catch(err){
            done(err, false);
        }
    }
));