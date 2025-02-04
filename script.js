document.addEventListener('DOMContentLoaded', function() {
  const namePlaceholder = document.getElementById('name-placeholder');

  // Obfuscated function definition (example - improve obfuscation as needed)
  const getName = () => {
      const encodedName = 'Um9iZXJ0IFRyYW4K'; // Placeholder for encoded name
      return atob(encodedName); // Decode the name
  };

  namePlaceholder.textContent = getName();
});