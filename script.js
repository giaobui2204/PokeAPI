const pokemonNameInput = document.getElementById('pokemon-name');
const searchButton = document.getElementById('search-button');
const pokemonCard = document.getElementById('pokemon-card');

searchButton.addEventListener('click', async () => {
  const pokemonName = pokemonNameInput.value.toLowerCase();
  if (!pokemonName) return;

  const url = `https://pokeapi.co/api/v2/pokemon/${pokemonName}`;

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Failed to fetch data for Pokémon: ${pokemonName}`);
    }
    const data = await response.json();
    displayPokemon(data);
  } catch (error) {
    console.error(error);
    alert("Oops! We couldn't find that Pokémon. Please check the name and try again.");
  }
});

function displayPokemon(data) {
  const name = data.name;
  const id = data.id;
  const imageUrl = data.sprites.front_default;

  pokemonCard.innerHTML = `
    <h2>${name}</h2>
    <p>#${id}</p>
    <img src="${imageUrl}" alt="${name}">
  `;

  pokemonCard.style.display = 'block';
}
