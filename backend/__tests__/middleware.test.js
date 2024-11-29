const Koa = require('koa');
const supertest = require('supertest');
const { limiter } = require('../middlewares');
const { ERRORS } = require('../enums');

const MAX_REQUESTS = 50;
const DURATION = 1000;

const app = new Koa();

app.use(limiter);
app.use(async (ctx) => {
  ctx.body = 'Request successful';
});

describe('Rate Limiter Middleware', () => {
  let server;

  beforeAll(() => {
    server = app.listen();
  });

  afterAll(() => {
    server.close();
  });

  it('should allow requests below the rate limit', async () => {
    const response = await supertest(server).get('/');
    expect(response.status).toBe(200);
    expect(response.text).toBe('Request successful');
  });

  it('should return 429 Too Many Requests once the limit is exceeded', async () => {
    for (let i = 0; i < MAX_REQUESTS; i++) {
      await supertest(server).get('/');
    }

    const response = await supertest(server).get('/');
    expect(response.status).toBe(429);
    expect(response.body).toEqual({ message: ERRORS.TO_MANY_REQUESTS });
  });

  it('should reset after the duration period', async () => {
    for (let i = 0; i < MAX_REQUESTS; i++) {
      await supertest(server).get('/');
    }

    let response = await supertest(server).get('/');
    expect(response.status).toBe(429);

    await new Promise((resolve) => setTimeout(resolve, DURATION));

    response = await supertest(server).get('/');
    expect(response.status).toBe(200);
    expect(response.text).toBe('Request successful');
  });
});
