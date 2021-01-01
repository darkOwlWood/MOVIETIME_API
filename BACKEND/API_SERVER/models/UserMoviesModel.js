const Joi = require('joi');

const JoiUserId  = Joi.string().regex(/^[0-9a-fA-F]{24}$/);
const JoiMovieId = Joi.number().integer().min(1);

const UserIdModel = Joi.object({
    userId: JoiUserId.required(),
});

const UserMoviesCreateDeleteModel = Joi.object({
    userId: JoiUserId.required(),
    movieId: JoiMovieId.required(),
});

module.exports = {
    UserIdModel,
    UserMoviesCreateDeleteModel,
};