const Joi = require('joi');

const JoiName       = Joi.string().pattern(/^([A-Za-z]\s*)+$/).trim().max(20);
const JoiMiddleName = Joi.string().pattern(/^([A-Za-z]\s*)+$/).trim().max(20);
const JoiLastName   = Joi.string().pattern(/^([A-Za-z]\s*)+$/).trim().max(20);
const JoiEmail      = Joi.string().email({ tlds: { allow: ['com', 'net'] } }).trim().max(40);
const JoiPassword   = Joi.string().trim().max(20);

const UserCreateModel = Joi.object({
    name:        JoiName.required(),
    middle_name: JoiMiddleName.required(),
    last_name:   JoiLastName.required(),
    email:       JoiEmail.required(),
    password:    JoiPassword.required(),
});

module.exports = { 
    UserCreateModel,
};