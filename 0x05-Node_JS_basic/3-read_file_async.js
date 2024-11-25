const fs = require('fs').promises;

function countStudents(path) {
    return fs.readFile(path, 'utf8')
        .then((data) => {
            const lines = data.split('\n').filter((line) => line.trim() !== ''); // Remove empty lines

            if (lines.length === 0) {
                throw new Error('Cannot load the database');
            }

            // Extract headers and data rows
            const headers = lines[0].split(',');
            const rows = lines.slice(1);

            const studentsByField = {};
            let totalStudents = 0;

            rows.forEach((row) => {
                const values = row.split(',');
                if (values.length !== headers.length) {
                    return; // Skip invalid rows
                }

                const firstname = values[0].trim();
                const field = values[3].trim();

                if (!studentsByField[field]) {
                    studentsByField[field] = [];
                }
                studentsByField[field].push(firstname);
                totalStudents += 1;
            });

            // Log results
            console.log(`Number of students: ${totalStudents}`);
            for (const [field, students] of Object.entries(studentsByField)) {
                console.log(`Number of students in ${field}: ${students.length}. List: ${students.join(', ')}`);
            }
        })
        .catch((err) => {
            throw new Error('Cannot load the database');
        });
}

module.exports = countStudents;
