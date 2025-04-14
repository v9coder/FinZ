document.getElementById("login-form").addEventListener("submit", async function (e) {
    e.preventDefault();
  
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();
  
    try {
      await firebase.auth().signInWithEmailAndPassword(email, password);
      alert("Login successful!");
      window.location.href = "index.html";
    } catch (error) {
      alert("Login failed: " + error.message);
    }
  });
  