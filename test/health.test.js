const supertest = require('supertest');
const app = require('../app');

const api = supertest(app);

describe('test route /healt', () => {
    test('is status code 200', async () => {
        await api.get('/health')
            .expect(200);
    });

    test('is ContentType json', async () => {
        await api.get('/health')
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
    });

    test('is response data it ok', async () => {
        const res = await api.get('/health');        
        expect(res.body).toHaveProperty('name');
        expect(res.body).toHaveProperty('version');  
    });
});