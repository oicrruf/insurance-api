const Joi = require('joi');

const getUserSchema = Joi.object({
  id: Joi.number().integer().required(),
});

module.exports = { getUserSchema };
