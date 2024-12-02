const { getRandomNumber } = require('../helpers');
const { MESSAGES, STATUSES } = require('../enums');
const { apiService } = require('../services');

const MIN = 1;
const MAX = 1000;

const apiController = {
  async sendWithDelay(ctx) {
    try {
      const { index } = ctx.request.body;
      if (!index) {
        ctx.status = STATUSES.NOT_FOUND;
        ctx.body = { message: MESSAGES.INDEX_MISSING };
        return;
      }
      const delayedPromise = new Promise((resolve) =>
        setTimeout(resolve, getRandomNumber(MIN, MAX)),
      );
      await delayedPromise;

      const result = apiService.getIndex(index);

      if (!result) {
        ctx.status = STATUSES.BAD_REQUEST;
        ctx.body = { message: MESSAGES.NO_VALID_INDEX };
        return;
      }
      console.log(`result ${result}`, result);
      ctx.status = STATUSES.CREATED;
      ctx.body = { index: result };
    } catch (error) {
      throw error;
    }
  },
};

module.exports = { apiController };
