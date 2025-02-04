const namePlaceholder = document.getElementById('name-placeholder');
const concealedName = namePlaceholder.dataset.name; // Get the name from the data attribute

namePlaceholder.textContent = concealedName === "__NAME__" ? "Loading..." : concealedName; // Handle placeholder case