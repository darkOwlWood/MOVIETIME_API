const Joi = require('joi');

const JoiId =            Joi.number().integer().min(1);            
const JoiIdArray =       Joi.string().pattern(/^(\d+|\[\d+(,\d+)*\]|\d+(,\d+)*)$/);
const JoiTitle =         Joi.string().max(50);
const JoiYear =          Joi.number().integer().min(1888).max(3000);
const JoiCover =         Joi.string().uri();
const JoiDescription =   Joi.string().max(500);
const JoiDuration =      Joi.number().integer().min(1).max(300);
const JoiContentRating = Joi.string().max(10);
const JoiSource =        Joi.string().uri();
const JoiTags =          Joi.array().items(Joi.string().max(20));

const MovieIdModel = Joi.object({
    id: JoiId.required(), 
});

const MovieIdArrayModel = Joi.object({
    id: JoiIdArray.required(), 
});

const MovieCreateModel = Joi.object({
    title:          JoiTitle.required(),
    year:           JoiYear.required(),
    cover:          JoiCover.required(),
    description:    JoiDescription.required(),
    duration:       JoiDuration.required(),
    content_rating: JoiContentRating.required(),
    source:         JoiSource.required(),
    tags:           JoiTags.required(),
});

const MovieUpdateModel = Joi.object({
    title:            JoiTitle,
    year:             JoiYear,
    cover:            JoiCover,
    description:      JoiDescription,
    duration:         JoiDuration,
    content_rating:   JoiContentRating,
    source:           JoiSource,
    tags:             JoiTags,
});

module.exports = {
    MovieIdModel,
    MovieIdArrayModel,
    MovieCreateModel,
    MovieUpdateModel,
};