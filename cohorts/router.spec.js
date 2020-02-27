const request = require('supertest');
const server = require('../api/server');

describe('cohorts router', function() {
    it('should run the tests', function () {
        expect(true).toBe(true);
    });

    describe('GET /', function () {
        it('should return 200 ok', function () {
            return request(server)
            .get('/api/cohorts')
            .then(res => {
                expect(res.status).toBe(200);
            })
        });

        it('should return JSON formatted body', function () {
            return request(server)
            .get('/api/cohorts')
            .then(res => {
                expect(res.type).toMatch(/json/);
            })
        });

        it('should return cohorts as the router value', async function () {
            await request(server)
            .get('/api/cohorts')
            .then(res => {
                // expect(res.body.router).toBe('cohorts');
                expect(Array.isArray(res.body)).toBe(true);
            })
        })
    });
});