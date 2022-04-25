const { models } = require('../libs/sequelize');

class UserService {
  constructor() {}

  async create() {}

  async findAll() {
    return await models.User.findAll({
      attributes: {
        exclude: ['password'],
      },
    });
  }

  async findByPk(id, noPassword = 0) {
    if(noPassword == 0){
      return await models.User.findByPk(id);
    }
    else return await models.User.findByPk(id, {
      attributes: {
        exclude: ['password']
      }
    })    
  }

  async update() {}

  async delete() {}
}

module.exports = UserService;
