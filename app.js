const express = require('express');
const app = express();
const port = 3005;

app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/contact.html');
});

app.post('/submit-form', (req, res) => {
    const username = req.body.username;
    const email = req.body.email;
    const phone = req.body.phone;
    const message = req.body.message;

    res.send(`Thanks for submitting!`);
});

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});

