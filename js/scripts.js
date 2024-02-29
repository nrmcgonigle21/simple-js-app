var pokemonList = []
pokemonList.push(
    { name: "pikachu", height: 4, types: ['electric'] },
    { name: "Charizard", height: 5, types: ['fire', 'flying'] },
    { name: "Bulbasaur", height: 3, types: ['grass', 'poison'] }
    //array of pokemon names, including their height and abilities
);
//find the tallest pokemon
let tallestHeight = 0;
for (let i = 0; i < pokemonList.length; i++) {
    if (pokemonList[i].height > tallestHeight) {
        tallestHeight = pokemonList[i].height;
    }
}

//loop through the list array
for (let i = 0; i < pokemonList.length; i++) {
    let pokemon = pokemonList[i];
    let heightLabel = ` (height: ${pokemon.height})`;
    //Height label
    if (pokemonList[i].height === tallestHeight) {
        heightLabel += " - Wow, that's big!";
    }
    // Prints the pokemon name followed by its height and label
    document.write(`<p>${pokemon.name}${heightLabel}</p>`);
}



