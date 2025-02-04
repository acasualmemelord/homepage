document.addEventListener('DOMContentLoaded', function() {
  const namePlaceholder = document.getElementById('name-placeholder');

  // Fetch the name from a separate file (name.json)
  fetch('name.json')
    .then(response => response.json())
    .then(data => {
      namePlaceholder.textContent = data.name;
    });
});