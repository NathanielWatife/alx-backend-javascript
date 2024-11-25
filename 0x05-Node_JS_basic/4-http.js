const http = require('http');
const PORT = 12345
// Create the server
const app = http.createServer((req, res) => {
    res.statusCode = 200; // HTTP status code for success
    res.setHeader('Content-Type', 'text/plain'); // Plain text response
    res.end('Hello Holberton School!'); // Response body
});

// Listen on port 1245
app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});

// Export the app
module.exports = app;
