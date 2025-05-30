const request = require('supertest');
const app = require('./index');

describe('GET /', () => {
  it('responds with Hello message', async () => {
    const res = await request(app).get('/');
    expect(res.statusCode).toBe(200);
    expect(res.text).toContain('Hello, つね');
  });
});