const errorMessage = require('../schemas/errorMessage.json');
const { config } = require('../config/config');

const validatorHandler = (schema, property) => {
  return async (req, res, next) => {
    try {
      const data = req[property];
      const language = req.header('language')
        ? req.header('language')
        : config.language;

      await schema.validateAsync(data, {
        abortEarly: false,
        messages: errorMessage,
        errors: {
          language: language,
        },
      });
      next();
    } catch (error) {
      //console.log(error);
      res.status(400).json({
        message: error.message,
      });
    }
  };
};

module.exports = validatorHandler;
