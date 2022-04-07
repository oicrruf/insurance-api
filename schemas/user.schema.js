const Joi = require('joi');
const { Model } = require('sequelize/types');

const getUserSchema = Joi.object({
  id: Joi.integer().required(),
});

module.exports = {
  getUserSchema,
};
