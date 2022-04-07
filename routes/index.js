const healthRouter = require('./health.router');

const routerApi = (app) => {
  app.use('/health', healthRouter);
};

module.exports = routerApi;
