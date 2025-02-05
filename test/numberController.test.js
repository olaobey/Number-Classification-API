const request = require('supertest');
const app = require('../src/app');

describe('GET /api/classify-number', () => {
    it('should return 400 for invalid input', async () => {
        const res = await request(app).get('/api/classify-number?number=abc');
        expect(res.statusCode).toEqual(400);
        expect(res.body).toHaveProperty('error', true);
    });

    it('should return 200 and number info for valid input', async () => {
        const res = await request(app).get('/api/classify-number?number=371');
        expect(res.statusCode).toEqual(200);
        expect(res.body).toHaveProperty('number', 371);
        expect(res.body).toHaveProperty('properties');
    });
});