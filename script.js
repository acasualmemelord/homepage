document.addEventListener('DOMContentLoaded', function() {
  const namePlaceholder = document.getElementById('name-placeholder');
  const getName = window.getName; // Get the function from the injected code

  if (getName) { // Check if the function exists (important for local testing)
    namePlaceholder.textContent = getName(); // Call the function to get the name
  } else {
    namePlaceholder.textContent = "Name not available."; // Default message
  }
});