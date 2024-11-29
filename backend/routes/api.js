const Router = require('koa-router');

const { apiController } = require('../controllers');
const { API_PATH } = require('../enums');

const apiRouter = new Router();

apiRouter.post(API_PATH.API, apiController.sendWithDelay);

module.exports = { apiRouter };
