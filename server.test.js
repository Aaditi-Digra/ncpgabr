const request = require('supertest');
const http = require('http');
const serverModule = require('./server'); // if you export server

// If server.js does not export the server, wrap it here:
const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'application/json');
  res.end(JSON.stringify({ message: 'Hello World from Node.js!' }));
});

describe('Simple Node Server', () => {
  it('should return Hello World message', async () => {
    const response = await request(server).get('/');
    expect(response.statusCode).toBe(200);
    expect(response.body).toEqual({ message: 'Hello World from Node.js!' });
  });

  it('should respond with JSON content type', async () => {
    const response = await request(server).get('/');
    expect(response.headers['content-type']).toMatch(/application\/json/);
  });
});
