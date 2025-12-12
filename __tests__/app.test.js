const request = require('supertest');
const app = require('../src/app');

describe('GET /api', () => {
  it('responde con Hola Mundo', async () => {
    const response = await request(app).get('/api');

    expect(response.status).toBe(200);
    expect(response.body).toEqual({ message: 'Hola Mundo' });
  });
});