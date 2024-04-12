//Importing the express module
const express = require('express');
const app = express();
// Defining the port number
const port = 3005;

// Parsing application and extracts form data
app.use(express.urlencoded({ extended: true }));

// Accesses all of my other html and css files from public folder
app.use(express.static('public'));

app.get('/', (req, res) => {
    // Sends HTML file on GET request
    res.sendFile(__dirname + '/contact.html');
});

app.post('/submit-form', (req, res) => {
    // Accessing the form data for all the required fields below
    const username = req.body.username;
    const email = req.body.email;
    const phone = req.body.phone;
    const message = req.body.message;

    // Sends a confirmation message to the user
    res.send(`Thanks for submitting!`);
});

// Start Server
app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});

