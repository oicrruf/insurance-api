const { api } = require('./helpers');

describe('/users', () => {
  test('is status code 200 and contenttype json', async () => {
    const res = await api
      .get('/users')
      .set('Accept', 'application/json')
      .expect(200)
      .expect('Content-Type', /json/);

    expect(Array.isArray(res.body)).toBe(true);
  });
});

describe('/users:id', () => {
  test('is status code 200', async () => {
    const res = await api
      .get('/users/1')
      .set('Accept', 'application/json')
      .expect(200)
      .expect('Content-Type', /json/);

    expect(typeof res.body === 'object').toBe(true);
    expect(res.body.id).toBe(1);
  });
});
