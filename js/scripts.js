var pokemonList = []
pokemonList.push(
    { name: "pikachu", height: 4, types: ['electric'] },
    { name: "Charizard", height: 5, types: ['fire', 'flying'] },
    { name: "Bulbasaur", height: 3, types: ['grass', 'poison'] }
);
//loop through the list array
for (let i=0; i < pokemonList.length; i++) {
    document.write(`<span><strong class="pokename">${pokemonList[i].name}</strong> (${pokemonList[i].height})</span><br>`)
}

