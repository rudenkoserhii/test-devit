const Koa = require('koa');
const supertest = require('supertest');
const bodyParser = require('koa-bodyparser');
const { apiController } = require('../controllers');
const { apiService } = require('../services');
const { getRandomNumber } = require('../helpers');
const { MESSAGES, STATUSES } = require('../enums');

jest.mock('../services');
jest.mock('../helpers');

describe('apiController.sendWithDelay', () => {
  let app;
  let server;

  beforeAll(() => {
    app = new Koa();

    app.use(bodyParser());

    app.use(async (ctx, next) => {
      if (ctx.method === 'POST' && ctx.url === '/api') {
        await apiController.sendWithDelay(ctx);
      } else {
        await next();
      }
    });

    server = app.listen();
  });

  afterAll(() => {
    server.close();
  });

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should return a 404 status when index is missing in the request body', async () => {
    const response = await supertest(server).post('/api').send({});

    expect(response.status).toBe(STATUSES.NOT_FOUND);
    expect(response.body).toEqual({ message: MESSAGES.INDEX_MISSING });
  });

  it('should return a 400 status when the index is not valid (no result from apiService)', async () => {
    getRandomNumber.mockReturnValue(1000);

    apiService.getIndex.mockReturnValue(null);

    const response = await supertest(server).post('/api').send({ index: 1 });

    expect(response.status).toBe(STATUSES.BAD_REQUEST);
    expect(response.body).toEqual({ message: MESSAGES.NO_VALID_INDEX });
  });

  it('should return a 201 status with the index when apiService returns a valid result', async () => {
    getRandomNumber.mockReturnValue(1000);

    apiService.getIndex.mockReturnValue(42);

    const response = await supertest(server).post('/api').send({ index: 1 });

    expect(response.status).toBe(STATUSES.CREATED);
    expect(response.body).toEqual({ index: 42 });
  });
});
