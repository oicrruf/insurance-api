const healthRouter = require('./health.router')

function routerApi(app){
  app.use('/health', healthRouter);
}

module.exports = routerApi;
