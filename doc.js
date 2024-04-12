// Selects form element
const form = document.querySelector("form");
form.addEventListener("submit", function(event) {
    event.preventDefault(); // Prevents the default form submission behavior

    // Retrieves the values of the name, email, phone, and message fields from the form
    const nameValue = document.querySelector("#name").value;
    const emailValue = document.querySelector("#email").value;
    const phoneValue = document.querySelector("#phone").value;
    const messageValue = document.querySelector("#message").value;

    // Validation Logic
    if (!nameValue || !emailValue || !phoneValue || !messageValue) {
        alert("All fields are incomplete."); // Alert
    } else {
        alert("Thank you for submitting the form. "); // Confirmation Message
    }
});
