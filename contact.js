// Contact Form Handler
document.addEventListener("DOMContentLoaded", function() {
    const form = document.querySelector(".contact-form form");

    form.addEventListener("submit", function(e) {
        e.preventDefault(); // prevent refresh

        let name = form.querySelector("input[type='text']").value.trim();
        let email = form.querySelector("input[type='email']").value.trim();
        let message = form.querySelector("textarea").value.trim();

        if (name === "" || email === "" || message === "") {
            alert("⚠️ Please fill in all fields");
            return;
        }

        // Save message in localStorage (for demo purpose)
        let messages = JSON.parse(localStorage.getItem("messages")) || [];
        messages.push({ name, email, message, date: new Date().toLocaleString() });
        localStorage.setItem("messages", JSON.stringify(messages));

        alert("✅ Message sent successfully!");

        // Reset form
        form.reset();
    });
});