document.getElementById("signup-form").addEventListener("submit", async function (e) {
    e.preventDefault();
  
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();
    const confirmPassword = document.getElementById("confirm-password").value.trim();
  
    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
  
    try {
      await firebase.auth().createUserWithEmailAndPassword(email, password);
      alert("Signup successful!");
      window.location.href = "index.html";
    } catch (error) {
      alert("Signup failed: " + error.message);
    }
  });
  