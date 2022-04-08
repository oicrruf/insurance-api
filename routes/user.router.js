const express = require('express');
const UserService = require('../services/user.service');
const { getUserSchema } = require('../schemas/user.schema');
const validatorHandler = require('../middlewares/validator.handler');

const router = express.Router();
const service = new UserService();

router.get(
  '/:id',
  validatorHandler(getUserSchema, 'params'),
  async (req, res) => {
    try {
      const { id } = req.params;
      const user = await service.findByPk(id);
      if (!user) {
        res.status(404).json({
          message: 'Usuario no encontrado',
        });
      }
      res.json(user);
    } catch (error) {
      console.log(error);
    }
  }
);

module.exports = router;
