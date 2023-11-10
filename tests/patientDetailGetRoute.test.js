const request = require('supertest');
const app = require('../app');

describe('GET route tests', () => {
	it('should return a 200 status code and valid response for GET route', async () => {
		const response = await request(app).get('/patients');
		console.log(response.status);
		expect(response.statusCode).toBe(200);
	});

	it('should handle errors and return a 404 status code for an invalid route', async () => {
		const response = await request(app).get('/doctors');
		expect(response.status).toBe(404);
	});

	it('should return a 200 status code and valid response for GET route', async () => {
		const response = await request(app).get('/patients/rydhamik@gmail.com');
		expect(response.status).toBe(200);
	});

	it('should handle errors and return a 404 status code for an invalid route', async () => {
		const response = await request(app).get('/doctors/rydhamik@gmail.com');
		expect(response.status).toBe(404);
	});
});
