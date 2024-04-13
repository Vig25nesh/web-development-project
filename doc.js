// Selects form element
const form = document.querySelector("form");
// "Listens" for users submission once they submit form
form.addEventListener("submit", function(event) {
    event.preventDefault(); 

    // Retrieves the values of input field from the form
    const nameValue = document.querySelector("#name").value;
    const emailValue = document.querySelector("#email").value;
    const phoneValue = document.querySelector("#phone").value;
    const messageValue = document.querySelector("#message").value;

    // Validation Logic to ensure user fills out all fields
    if (!nameValue || !emailValue || !phoneValue || !messageValue) {
        alert("You didn't fill out evrything yet!"); // Error Alert
    } else {
        alert("Thanks for submitting!"); // Confirmation Message
    }
});
