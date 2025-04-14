document.getElementById("signup-form").addEventListener("submit", async function (e) {
  e.preventDefault();

  const fullName = document.getElementById("full-name").value.trim();
  const profilePic = document.getElementById("profile-pic").value.trim();
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();
  const confirmPassword = document.getElementById("confirm-password").value.trim();

  if (password !== confirmPassword) {
    alert("Passwords do not match!");
    return;
  }

  const auth = firebase.auth();
  const db = firebase.firestore();

  try {
    const userCredential = await auth.createUserWithEmailAndPassword(email, password);
    const user = userCredential.user;

    // Update user profile with name & photo
    await user.updateProfile({
      displayName: fullName,
      photoURL: profilePic
    });

    // Store extra info in Firestore
    await db.collection("users").doc(user.uid).set({
      name: fullName,
      email: email,
      photoURL: profilePic,
      role: "user", // default role
      joinedDate: new Date().toISOString()
    });

    alert("Signup successful!");
    window.location.href = "index.html"; // Redirect after signup
  } catch (error) {
    console.error(error);
    alert("Signup failed: " + error.message);
  }
});
