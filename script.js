const form = document.getElementById("signup-form");
form.addEventListener("submit", (event) => {
  event.preventDefault();

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const confirmPassword = document.getElementById("confirm-password").value;

  
  if (name.length < 2) {
    alert("Name should be at least 2 letters.");
    return;
  }

  if (!/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
    alert("Invalid email address.");
    return;
  }

  if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(password)) {
    alert("Password should have at least 1 capital letter, 1 small letter, 1 number, and 1 special character.");
    return;
  }

  if (password === name || password === email) {
    alert("Password cannot be the same as name or email.");
    return;
  }

  if (password !== confirmPassword) {
    alert("Password and confirm password should be the same.");
    return;
  }

  
  const users = JSON.parse(localStorage.getItem("users")) || [];
  const existingUser = users.find((user) => user.email === email);
  if (existingUser) {
    alert("Email is already registered.");
    return;
  }

  
  window.location.href = "index.html";
});

