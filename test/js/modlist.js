// Function to load modlist from a separate JSON file based on the game
function loadModList(game) {
    const modListContainer = document.getElementById("mod-list-container");
    modListContainer.innerHTML = ''; // Clear existing content

    // Choose the JSON file based on the game
    const filePath = game === 'skyrim' ? 'skyrim-mods/skyrim-mods.json' : 'fallout-mods/fallout-mods.json';

    // Fetch the JSON file and dynamically load modlist
    fetch(filePath)
        .then(response => response.json())
        .then(mods => {
            mods.forEach(mod => {
                const modItem = document.createElement('div');
                modItem.classList.add('mod-item');

                // Create HTML for each mod
                modItem.innerHTML = `
                    <h2>${mod.name}</h2>
                    <p><strong>Author:</strong> ${mod.author}</p>
                    <p><strong>Version:</strong> ${mod.version}</p>
                    <p>${mod.description}</p>
                `;

                // Add the mod to the container
                modListContainer.appendChild(modItem);
            });
        })
        .catch(error => {
            modListContainer.innerHTML = `<p>Error loading mod list. Please try again later.</p>`;
            console.error('Error loading mod list:', error);
        });
}
