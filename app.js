document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('form');

    form.addEventListener('submit', async (e) => {
        e.preventDefault();

        const name = document.getElementById('Name').value;
        const email = document.getElementById('email').value;
        const phone = document.getElementById('phone').value;
        const message = document.getElementById('message').value;

        // Send form data to the server
        try {
            const response = await fetch('/submit-form', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ name, email, phone, message })
            });

            const data = await response.json();

            if (data.success) {
                alert('Form submitted successfully!');
                form.reset();
            } else {
                alert('Error submitting the form. Please try again later.');
            }
        } catch (error) {
            console.error('Error:', error);
        }
    });
});
