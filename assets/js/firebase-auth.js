// Using the compat version (firebase-auth-compat.js)
const auth = firebase.auth();

// Optional: Helper to get current user info
function getCurrentUser(callback) {
  firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      callback(user);
    } else {
      callback(null);  // Not logged in
    }
  });
}