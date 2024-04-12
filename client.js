document.addEventListener("DOMContentLoaded", function() {
    const contactForm = document.getElementById("contactForm");

    if (contactForm) {
        contactForm.addEventListener("submit", function(event) {
            event.preventDefault(); // Prevent the default form submission behavior

            // Accessing the form data
            const username = document.getElementById("username").value;
            const email = document.getElementById("email").value;
            const phone = document.getElementById("phone").value;
            const message = document.getElementById("message").value;

            // Displaying the popup message
            alert("Thanks for submitting!");

            // Optional: You can clear the form fields after submission if needed
            contactForm.reset();
        });
    }
});
