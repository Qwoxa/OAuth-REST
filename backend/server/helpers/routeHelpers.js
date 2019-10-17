const Joi = require('joi');
const createError = require('http-errors');

module.exports = {
    validateBody: schema => {
        return (req, res, next) => {
            const result = Joi.validate(req.body.local, schema);
            return result.error ? next(createError(422, result.error)) : next();
        };
    },
    schemas: {
        authSchema: Joi.object().keys({
            email: Joi.string().email().required(),
            password: Joi.string().required()
        })
    }
};