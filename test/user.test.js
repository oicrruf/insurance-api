const { api } = require('./helpers');

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
    expect(res.body.userId).toBe("1");
  });
});
