const http = require('http');
const countStudents = require('./3-read_file_async');

// Get the database file path from command-line arguments
const databasePath = process.argv[2];

const app = http.createServer((req, res) => {
    res.setHeader('Content-Type', 'text/plain'); // Plain text response

    if (req.url === '/') {
        res.statusCode = 200;
        res.end('Hello Holberton School!');
    } else if (req.url === '/students') {
        res.statusCode = 200;
        res.write('This is the list of our students\n');

        countStudents(databasePath)
            .then(() => {
                res.end(); // Ensure response ends after async operation
            })
            .catch((error) => {
                res.end(error.message); // Handle errors gracefully
            });
    } else {
        res.statusCode = 404;
        res.end('Not Found');
    }
});

// Listen on port 1245
app.listen(1245, () => {
    console.log('Server is listening on port 1245');
});

// Export the app
module.exports = app;
