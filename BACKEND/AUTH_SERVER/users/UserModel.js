const Joi = require('joi');

const JoiIdAndVerify = Joi.string().pattern(/^([0-9a-fA-F]{24}:[0-9a-fA-F]{40})$/); 
const JoiVerify      = Joi.string().pattern(/^([0-9a-fA-F]{40})$/);
const JoiName        = Joi.string().pattern(/^([A-Za-z]\s*)+$/).trim().max(20);
const JoiMiddleName  = Joi.string().pattern(/^([A-Za-z]\s*)+$/).trim().max(20);
const JoiLastName    = Joi.string().pattern(/^([A-Za-z]\s*)+$/).trim().max(20);
const JoiEmail       = Joi.string().email({ tlds: { allow: ['com', 'net'] } }).trim().max(40);
const JoiPassword    = Joi.string().trim().max(20);

const UserIdAndVerify = Joi.object({
    code: JoiIdAndVerify.required(),
});

const UserVerifyCode = Joi.object({
    verify: JoiVerify.required(),
});

const UserIdVerifyAndKey = Joi.object({
    code:   JoiIdAndVerify.required(),
    apiKey: JoiVerify.required(),
});

const UserCreateModel = Joi.object({
    name:        JoiName.required(),
    middle_name: JoiMiddleName.required(),
    last_name:   JoiLastName.required(),
    email:       JoiEmail.required(),
    password:    JoiPassword.required(),
});

module.exports = {
    UserIdAndVerify,
    UserVerifyCode,
    UserIdVerifyAndKey,
    UserCreateModel,
};