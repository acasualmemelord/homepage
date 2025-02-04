document.addEventListener('DOMContentLoaded', function() {
  const namePlaceholder = document.getElementById('name-placeholder');
  const getName = window.getName; // Get the function from the other script

  if (getName) {
    namePlaceholder.textContent = getName();
  } else {
    namePlaceholder.textContent = "Name not available.";
  }
});