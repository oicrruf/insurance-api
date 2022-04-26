const { api } = require('./helpers');

describe('/health', () => {
  test('is status code 200', async () => {
    await api.get('/health').expect(200);
  });

  test('is contenttype json', async () => {
    await api
      .get('/health')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/);
  });

  test('response is object and to have name and version properties', async () => {
    const res = await api.get('/health');
    expect(typeof res.body === 'object').toBe(true);
    expect(res.body).toHaveProperty('name');
    expect(res.body).toHaveProperty('version');
  });
});
