// Sign Up
document.getElementById("signupForm")?.addEventListener("submit", function(e) {
    e.preventDefault();
    
    let name = document.getElementById("signupName").value;
    let email = document.getElementById("signupEmail").value;
    let password = document.getElementById("signupPassword").value;

    if(localStorage.getItem(email)) {
        alert("User already exists!");
        return;
    }

    let user = { name, email, password };
    localStorage.setItem(email, JSON.stringify(user));

    alert("Sign up successful! Please log in.");
    window.location.href = "login.html";
});

// Login
document.getElementById("loginForm")?.addEventListener("submit", function(e) {
    e.preventDefault();

    let email = document.getElementById("loginEmail").value;
    let password = document.getElementById("loginPassword").value;

    let storedUser = JSON.parse(localStorage.getItem(email));

    if(storedUser && storedUser.password === password) {
        alert(`Welcome back, ${storedUser.name}!`);
        window.location.href = "index.html";
    } else {
        alert("Invalid email or password!");
    }
});
