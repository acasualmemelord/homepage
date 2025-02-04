document.addEventListener('DOMContentLoaded', function() {
  const namePlaceholder = document.getElementById('name-placeholder');

  // No fetch, no placeholders.  Generate content dynamically.
  const concealedName = window.nameFromEnv; // Get from env variable

  if (concealedName) { // Check if the variable exists (important for local testing)
      namePlaceholder.textContent = concealedName;
  } else {
      namePlaceholder.textContent = "Name not available."; // Or some other default message
  }
});window.nameFromEnv = 'Robert Tran';
