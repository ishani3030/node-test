const Joi = require('@hapi/joi');
const {validateBody} = require('../middlewares/route');

function validateCreateUser(req, res, next) {
    return validateBody(Joi.object().keys({
        firstName: Joi.string().required().description('Users first name'),
        lastName: Joi.string().required().description('Users last name'),
        age: Joi.number().integer().required().description('Users age'),
        profession: Joi.string().default('unemployed'),
    }))(req, res, next);
}

function validateSubstituteReferenceData(req, res, next) {
    return validateBody(Joi.object().keys({
        payload: Joi.object().required().description('Payload object'),
        referenceData: Joi.object().required().description('referenceData object to substitute the values'),
    }))(req, res, next);
}

module.exports = {validateCreateUser, validateSubstituteReferenceData};