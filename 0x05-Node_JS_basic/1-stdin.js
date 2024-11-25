// Display the welcome message
console.log("Welcome to Holberton School, what is your name?");

// Listen for user input
process.stdin.on('data', (data) => {
    const input = data.toString().trim();
    console.log(`Your name is: ${input}`);

    // End the process after displaying the name
    process.stdin.end();
});

// Listen for when stdin is closed
process.stdin.on('end', () => {
    console.log("This important software is now closing");
});
