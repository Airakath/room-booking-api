const Joi = require('joi');

exports.identifiantValidation = data => {
	const schema = Joi.object({
        email: Joi.string()
            .email()
            .required(),
        password: Joi.string()
            .min(8)
            .required()
	});

	return schema.validate(data);
};