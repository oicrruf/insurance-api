const express = require('express');
const UserService = require('../services/user.service');

const router = express.Router();
const service = new UserService();

router.get('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const user = await service.findByPk(id);
    res.json(user);
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
