function signup() {
    let newUser = document.getElementById("newUsername").value.trim();
    let newPass = document.getElementById("newPassword").value.trim();

    if (newUser === "" || newPass === "") {
        alert("Please fill all fields ");
        return;
    }

    localStorage.setItem("username", newUser);
    localStorage.setItem("password", newPass);

    alert("Signup Successful..! You can now login!");
    window.location.href = "index.html";
}

function login() {
    let user = document.getElementById("username").value.trim();
    let pass = document.getElementById("password").value.trim();

    let storedUser = localStorage.getItem("username");
    let storedPass = localStorage.getItem("password");

    console.log("Entered:", user, pass);
    console.log("Stored:", storedUser, storedPass);

    if (user === storedUser && pass === storedPass) {
        alert("Login Successful ");
        window.location.href = "dashboard.html";
    } else {
        alert("Invalid Username or Password ");
    }
}