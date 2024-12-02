const Koa = require('koa');
const bodyParser = require('koa-bodyparser');
const json = require('koa-json');
const logger = require('koa-logger');
const { koaSwagger } = require('koa2-swagger-ui');
const cors = require('@koa/cors');

const spec = require('./spec/swagger');
const { apiRouter } = require('./routes');
const { customLogger } = require('./utils');
const { limiter } = require('./middlewares');
const { STATUSES, ERRORS } = require('./enums');

const app = new Koa();

app.use(cors());
app.use(
  bodyParser({
    onerror: (err, ctx) => {
      ctx.throw(STATUSES.BAD_REQUEST, ERRORS.INVALID_JSON);
    },
  }),
);
app.use(json());
app.use(logger());
app.use(limiter);
app.use(koaSwagger({ swaggerOptions: { spec } }));

app.use(async (ctx, next) => {
  try {
    await next();
  } catch (error) {
    customLogger(error);

    ctx.status = error.status || STATUSES.INTERNAL_SERVER_ERROR;
    ctx.body = error.message;
  }
});

app.use(apiRouter.routes());
app.use(apiRouter.allowedMethods());

module.exports = { app };
