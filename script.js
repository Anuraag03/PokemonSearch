const searchInput = document.getElementById("search-input");
const searchBtn = document.getElementById("search-button");
const pokemonName = document.getElementById("pokemon-name");
const pokemonId = document.getElementById("pokemon-id");
const pokemonWeight = document.getElementById("weight");
const pokemonHeight = document.getElementById("height");
const pokemonTypes = document.getElementById("types");
const pokemonImage = document.getElementById("pokemon-image");
const pokemonHp = document.getElementById("hp");
const pokemonAttack = document.getElementById("attack");
const pokemonDefence = document.getElementById("defence");
const pokemonSpAttack = document.getElementById("special-attack");
const pokemonSpDefence = document.getElementById("special-defence");
const pokemonSpeed = document.getElementById("speed");
let pokemonData = {};
searchBtn.addEventListener("click", async () => {
  fetch(`https://pokeapi-proxy.freecodecamp.rocks/api/pokemon/${searchInput.value.toLowerCase()}`).then((response) => {
    
    
    return response.json();
  }).then((data) => {
    pokemonData = data;
    console.log(pokemonData);
    displayPokemon(pokemonData);
    
  })
  .catch(error => {
    console.error("There was a problem with the fetch operation:", error);
    alert("Pokémon not found");
  });
  
});
const displayPokemon = (pokemonData) => {
  // Name and ID
  pokemonName.innerText = pokemonData.name.toUpperCase();
  pokemonId.innerText = `#${pokemonData.id}`;

  // Weight and Height
  pokemonWeight.innerText = `Weight: ${pokemonData.weight}`;
  pokemonHeight.innerText = `Height: ${pokemonData.height}`;

  // Image
  pokemonImage.innerHTML = `<img src="${pokemonData.sprites.front_default}" id="sprite">`;

  // Types
  pokemonTypes.innerHTML = pokemonData.types
    .map((typeInfo) => {
      const type = typeInfo.type.name; // Get type name
      return `<span class="${type}">${type.toUpperCase()}</span>`;
    })
    .join(" ");

  // Stats
  pokemonHp.innerText = pokemonData.stats[0].base_stat;
  pokemonAttack.innerText = pokemonData.stats[1].base_stat;
  pokemonDefence.innerText = pokemonData.stats[2].base_stat;
  pokemonSpAttack.innerText = pokemonData.stats[3].base_stat;
  pokemonSpDefence.innerText = pokemonData.stats[4].base_stat;
  pokemonSpeed.innerText = pokemonData.stats[5].base_stat;
};

