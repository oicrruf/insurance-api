const express = require('express');
const UserService = require('../services/user.service');
const { getUserSchema } = require('../schemas/user.schema');
const validatorHandler = require('../middlewares/validator.handler');
const { config } = require('../config/config');
const errorMessage = require('../schemas/errorMessage.json');

const router = express.Router();
const service = new UserService();

router.get(
  '/:id',
  validatorHandler(getUserSchema, 'params'),
  async (req, res) => {
    try {
      const { id } = req.params;
      const user = await service.findByPk(id);

      const language = req.header('language')
        ? req.header('language')
        : config.language;
      if (!user) {
        res.status(404).json({
          message: errorMessage[language].userNotFound,
        });
      } else res.json(user);
    } catch (error) {
      console.log(error);
    }
  }
);
router.get('/', async (req, res) => {
  try {
    const language = req.header('language')
      ? req.header('language')
      : config.language;
    const users = await service.findAll();
    console.log(users);
    if (users.length === 0) {
      res.status(404).json({
        message: errorMessage[language].recordsNotFound,
      });
    } else res.json(users);
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
