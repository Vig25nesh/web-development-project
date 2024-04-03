const express = require('express');
const app = express();
const port = 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/contact.html');
});

app.post('/submit-form', (req, res) => {
    const username = req.body.username;
    const email = req.body.email;
    const phone = req.body.phone;
    const message = req.body.message;
    
    res.send(`Received form data: Username - ${username}, Email - ${email}, Phone - ${phone}, Message - ${message}`);
});

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});

