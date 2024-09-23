// Load the JSON file containing the mod list
$.getJSON('../json/skyrim.json', function(mods) {
  // Add each mod to the mod list
mods.forEach(function(mod) {
    var modElement = `
        <div class="mod">
            <img src="${mod.image}" alt="${mod.name}" width="200">
            <h3>${mod.name}</h3>
            <p>${mod.description}</