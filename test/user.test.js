const { api } = require('./helpers');
const errorMessage = require('../schemas/errorMessage.json');
const { config } = require('../config/config');

describe('/users', () => {
  test('is status code 200, contenttype json, is array', async () => {
    const res = await api
      .get('/users')
      .set('Accept', 'application/json')
      .expect(200)
      .expect('Content-Type', /json/);

    expect(Array.isArray(res.body)).toBe(true);
  });
});

describe('/users:id', () => {
  test('is status code 200, contenttype json, is object, is object', async () => {
    const res = await api
      .get('/users/1')
      .set('Accept', 'application/json')
      .expect(200)
      .expect('Content-Type', /json/);

    expect(typeof res.body === 'object').toBe(true);
    expect(res.body.id).toBe('1');
  });

  test('is status code 400', async () => {
    const res = await api
      .get('/users/1kfg')
      .set('Accept', 'application/json')
      .expect(400)
      .expect('Content-Type', /json/);
  });

  test('is status code 404 and message output User not found', async () => {
    const res = await api
      .get('/users/0')
      .set('Accept', 'application/json')
      .expect(404)
      .expect('Content-Type', /json/);

    expect(typeof res.body === 'object').toBe(true);
    expect(res.body.message).toBe(errorMessage[config.language].userNotFound);
  });
});
