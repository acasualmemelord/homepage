const namePlaceholder = document.getElementById('name-placeholder');

// Fetch the name from the environment variable injected by the workflow
const concealedName = window.nameFromEnv;

namePlaceholder.textContent = concealedName;