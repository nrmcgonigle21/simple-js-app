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
    if (pokemonList[i].height === tallestHeight) {
        document.write(`<span><strong class="pokename">${pokemonList[i].name} - Wow, that's big!</strong> (${pokemonList[i].height})</span><br>`);
    } else {
        document.write(`<span><strong class="pokename">${pokemonList[i].name}</strong> (${pokemonList[i].height})</span><br>`);
    }
}


