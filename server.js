// server.js - Simple Node.js HTTP server
const http = require('http');

const PORT = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'application/json');
  res.end(JSON.stringify({ message: 'Hello World from Node.js!' }));
});

// Only start listening if run directly
if (require.main === module) {
  server.listen(PORT, () => {
    console.log(`Server running smoothly on port ${PORT}`);
  });
}

// Export for testing
module.exports = server;
