const RateLimit = require('koa2-ratelimit').RateLimit;
const { ERRORS } = require('../enums');

const MAX_REQUESTS = 0;
const DURATION = 100;

const limiter = RateLimit.middleware({
  interval: DURATION,
  max: MAX_REQUESTS,
  message: ERRORS.TO_MANY_REQUESTS,
});

module.exports = { limiter };
