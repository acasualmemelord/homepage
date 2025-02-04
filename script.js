document.addEventListener('DOMContentLoaded', function() {
  const namePlaceholder = document.getElementById('name-placeholder');
  const concealedName = window.nameFromEnv;

  namePlaceholder.textContent = concealedName;
});window.nameFromEnv = 'Robert Tran';
