const healthRouter = require('./health.router');
const userRouter = require('./user.router');

const routerApi = (app) => {
  app.use('/health', healthRouter);
  app.use('/users', userRouter);
};

module.exports = routerApi;
