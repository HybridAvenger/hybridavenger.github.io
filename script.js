// script.js
function loadModlist(jsonFile) {
  fetch(jsonFile)
    .then(response => response.json())
    .then(data => {
      const modlistContainer = document.getElementById('modlist-container');
      modlistContainer.innerHTML = ''; // Clear existing content

      data.mods.forEach(mod => {
        const modItem = document.createElement('div');
        modItem.classList.add('mod-item');

        modItem.innerHTML = `
          <img src="${mod.image}" alt="${mod.name}">
          <h2>${mod.name}</h2>
          <p>${mod.description}</p>
          <a href="${mod.link}" target="_blank">Download Mod</a>
        `;

        modlistContainer.appendChild(modItem);
      });
    })
    .catch(error => console.error('Error fetching modlist:', error));
}
