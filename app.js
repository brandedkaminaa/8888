// Import Firebase modules
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-app.js";
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-auth.js";

// Firebase configuration (replace with your project credentials)
const firebaseConfig = {
  apiKey: "AIzaSyDvxpIGc1pXCUbdNmL-jn12ZH5SCv9yHyQ",
  authDomain: "sample-firebase-ai-app-d0476.firebaseapp.com",
  projectId: "sample-firebase-ai-app-d0476",
  storageBucket: "sample-firebase-ai-app-d0476.firebasestorage.app",
  messagingSenderId: "34096887128",
  appId: "1:34096887128:web:c9c2f1dae963abb90c612d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Login form event listener
document.getElementById("loginForm").addEventListener("submit", (e) => {
  e.preventDefault();

  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const message = document.getElementById("message");

  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Successful login
      const user = userCredential.user;
      message.textContent = `Welcome, ${user.email}!`;
      message.style.color = "green";
      console.log(user);
    })
    .catch((error) => {
      // Handle errors
      message.textContent = `Error: ${error.message}`;
      message.style.color = "red";
      console.error(error);
    });
});
