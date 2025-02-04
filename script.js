document.addEventListener('DOMContentLoaded', function() { // <-- Crucial: Wait for DOM to load
  const namePlaceholder = document.getElementById('name-placeholder');
  const concealedName = window.nameFromEnv;

  namePlaceholder.textContent = concealedName;
});