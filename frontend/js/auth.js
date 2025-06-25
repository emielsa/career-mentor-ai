const signupForm = document.getElementById("signupForm");
if (signupForm) {
  signupForm.addEventListener("submit", async (e) => {
    e.preventDefault();

    const fullName = document.getElementById("fullname").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    try {
      const response = await fetch("http://localhost:8080/api/auth/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ fullName, email, password }),
      });

      const token = await response.text();
      if (response.ok) {
        localStorage.setItem("token", token);
        alert("Signup successful!");
        window.location.href = "dashboard.html";
      } else {
        alert("Signup failed: " + token);
      }
    } catch (err) {
      alert("Network error");
    }
  });
}

// Login
const loginForm = document.getElementById("loginForm");
if (loginForm) {
  loginForm.addEventListener("submit", async (e) => {
    e.preventDefault();

    const email = document.getElementById("emailLogin").value;
    const password = document.getElementById("passwordLogin").value;

    try {
      const response = await fetch("http://localhost:8080/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const token = await response.text();
      if (response.ok) {
        localStorage.setItem("token", token);
        alert("Login successful!");
        window.location.href = "dashboard.html";
      } else {
        alert("Login failed: " + token);
      }
    } catch (err) {
      alert("Network error");
    }
  });
}
