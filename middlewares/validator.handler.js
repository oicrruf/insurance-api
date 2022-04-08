const validatorHandler = (schema, property) => {
  return (req, res, next) => {
    const data = req[property];
    const { error } = schema.validate(data);
    if (error) {
      res.status(400).send();
    }
    next();
  };
};

module.exports = validatorHandler;
