var pokemonList = []
pokemonList.push(
    { name: "pikachu", height: 4, types: ['electric'] },
    { name: "Charizard", height: 5, types: ['fire', 'flying'] },
    { name: "Bulbasaur", height: 3, types: ['grass', 'poison'] }
);
//pokemon list array
for (let i=0; i < pokemonList.length; i++) {
    document.write(`<h2>${pokemonList[i].name}</h2> <p>${pokemonList[i].height}</p>`)
}
//loop that iterates the pokemon in the array and prints a list of pokemon names
