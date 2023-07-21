// script.js

// Function to perform form validation
function validateForm() {
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirm-password').value;
  
    // Basic form validation
    if (username === '' || email === '' || password === '' || confirmPassword === '') {
      alert('Please fill in all fields');
      return false;
    }
  
    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      alert('Please enter a valid email address');
      return false;
    }
  
    // Validate password length
    if (password.length < 6) {
      alert('Password should be at least 6 characters long');
      return false;
    }
  
    // Validate password and confirm password match
    if (password !== confirmPassword) {
      alert('Passwords do not match');
      return false;
    }
  
    return true;
  }
  
  // Wait for the DOM to be fully loaded before attaching event listeners
  document.addEventListener('DOMContentLoaded', function () {
    const signupForm = document.getElementById('signup-form');
  
    // Handle form submission
    signupForm.addEventListener('submit', function (event) {
      event.preventDefault();
      if (validateForm()) {
        // Simulate form submission (in this example, we're just displaying an alert)
        alert('Signup successful!\n\nUsername: ' + document.getElementById('username').value +
              '\nEmail: ' + document.getElementById('email').value);
        signupForm.reset();
      }
    });
  });
  