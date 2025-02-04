document.addEventListener('DOMContentLoaded', function() {
  const namePlaceholder = document.getElementById('name-placeholder');
  const concealedName = window.nameFromEnv;  // <-- This will be replaced

  namePlaceholder.textContent = concealedName;
});

// Placeholder for replacement:  Robert Tran