// Fetch GitHub repositories using GitHub API
fetch('https://api.github.com/users/wycliffetyrell/repos')
  .then(response => response.json())
  .then(data => {
    const projectsContainer = document.getElementById('projects-container');

    data.forEach(repo => {
      const projectItem = document.createElement('div');
      projectItem.classList.add('project-item');

      // Customize the content of each project item
      projectItem.innerHTML = `
        <h3 class="poppins-semibold">${repo.name}</h3>
        <p>${repo.description}</p>
        <a href="${repo.html_url}" target="_blank" class="link poppins-regular">View on GitHub</a>
      `;

      projectsContainer.appendChild(projectItem);
    });
  })
  .catch(error => console.error('Error fetching GitHub repositories:', error));





  // JavaScript code for form submission (if needed)
document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission behavior
    
    // Get form data
    const formData = new FormData(this);
  
    // Convert form data to JSON object
    const jsonData = {};
    formData.forEach((value, key) => {
      jsonData[key] = value;
    });
  
    // Example: Log form data to console
    console.log(jsonData);
  
    // You can perform further actions here, such as sending the form data to a server
  });
  