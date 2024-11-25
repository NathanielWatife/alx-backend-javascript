const fs = require('fs');

function countStudents(path) {
    try {
        // Read the file synchronously
        const data = fs.readFileSync(path, 'utf8');
        const lines = data.split('\n').filter((line) => line.trim() !== ''); // Remove empty lines

        if (lines.length === 0) {
            throw new Error('Cannot load the database');
        }

        // Extract the headers and data rows
        const headers = lines[0].split(',');
        const rows = lines.slice(1);

        const studentsByField = {};
        let totalStudents = 0;

        // Process each row
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

        // Log the total number of students
        console.log(`Number of students: ${totalStudents}`);

        // Log the number of students per field and their names
        for (const [field, students] of Object.entries(studentsByField)) {
            console.log(`Number of students in ${field}: ${students.length}. List: ${students.join(', ')}`);
        }
    } catch (err) {
        // Handle file reading errors
        throw new Error('Cannot load the database');
    }
}

module.exports = countStudents
