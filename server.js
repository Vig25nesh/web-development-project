const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');

const app = express();
const PORT = process.env.PORT || 3000;

// Body parser middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Serve static files
app.use(express.static('public'));

// Route for handling form submission
app.post('/submit-form', (req, res) => {
    const { name, email, phone, message } = req.body;

    // Configure nodemailer
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'huxitige05@gmail.com', 
            pass: 'Saroja99' 
        }
    });

    // Email content
    const mailOptions = {
        from: 'huxitige05@gmail.com', 
        to: 'vigneshmullaguru05@gmail.com', 
        subject: 'New Form Submission',
        html: `
            <p>Name: ${name}</p>
            <p>Email: ${email}</p>
            <p>Phone: ${phone}</p>
            <p>Message: ${message}</p>
        `
    };

    // Send email
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return res.status(500).json({ success: false, error: error.message });
        }
        res.status(200).json({ success: true, message: 'Form submitted successfully!' });
    });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
