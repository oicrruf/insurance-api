const { models } = require('../libs/sequelize');

class UserService {
  constructor() {}

  async create() {}

  async find() {}

  async findByPk(id) {
    return await models.User.findByPk(id);
  }

  async update() {}

  async delete() {}
}

module.exports = UserService;
