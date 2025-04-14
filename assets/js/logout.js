document.addEventListener("click", function (e) {
    if (e.target.id === "logout-btn") {
      firebase.auth().signOut().then(() => {
        alert("Logged out successfully!");
        window.location.href = "login.html";
      }).catch((error) => {
        alert("Logout error: " + error.message);
      });
    }
  });
  