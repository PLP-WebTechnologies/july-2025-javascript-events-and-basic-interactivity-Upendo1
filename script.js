
// Part 1: Event Handling
document.getElementById("messageBtn").addEventListener("click", function () {
  document.getElementById("message").textContent = "You clicked the button!";
});

// Part 2: Interactive Elements
// Dark Mode Toggle
const themeToggle = document.getElementById("themeToggle");
themeToggle.addEventListener("click", function () {
  document.body.classList.toggle("dark-mode");
});

// Counter
let count = 0;
const countDisplay = document.getElementById("count");
document.getElementById("increase").addEventListener("click", function () {
  count++;
  countDisplay.textContent = count;
});
document.getElementById("decrease").addEventListener("click", function () {
  count--;
  countDisplay.textContent = count;
});

// Collapsible FAQ
const faqToggle = document.querySelector(".faq-toggle");
const faqContent = document.querySelector(".faq-content");
faqToggle.addEventListener("click", function () {
  faqContent.style.display =
    faqContent.style.display === "block" ? "none" : "block";
});

// Part 3: Form Validation
const form = document.getElementById("signupForm");

form.addEventListener("submit", function (event) {
  event.preventDefault(); // stop form submission
  let valid = true;

  // Name validation
  const name = document.getElementById("name").value.trim();
  if (name.length < 3) {
    document.getElementById("nameError").textContent =
      "Name must be at least 3 characters";
    valid = false;
  } else {
    document.getElementById("nameError").textContent = "";
  }

  // Email validation (regex)
  const email = document.getElementById("email").value.trim();
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    document.getElementById("emailError").textContent =
      "Please enter a valid email";
    valid = false;
  } else {
    document.getElementById("emailError").textContent = "";
  }

  // Password validation
  const password = document.getElementById("password").value;
  if (password.length < 6) {
    document.getElementById("passwordError").textContent =
      "Password must be at least 6 characters";
    valid = false;
  } else {
    document.getElementById("passwordError").textContent = "";
  }

  // Final check
  const formMessage = document.getElementById("formMessage");
  if (valid) {
    formMessage.textContent = "Form submitted successfully!";
    formMessage.className = "success";
    form.reset();
  } else {
    formMessage.textContent = "Please fix errors before submitting.";
    formMessage.className = "";
  }
});
