let currentPokemon = null;

const getPokemon = async (nameOrId) => {
    const apiUrl = `https://pokeapi.co/api/v2/pokemon/${nameOrId}/`;
    let res = await fetch(`${apiUrl}`, { method: "GET" });
    const pokemon = await res.json();
    currentPokemon = pokemon;

    return pokemon;
}

const addPokemonNameToDom = pokemon => {
    const div = document.getElementById('name')
    div.innerHTML = pokemon.name;
}

const showButton = document.querySelector('.Pokemon');
showButton.addEventListener('click', () => {
    const name = parseInt(Math.random() * 1000) + 1;
    getPokemon(name).then(pokemon => {
        console.log(pokemon)
        addPokemonNameToDom(pokemon)
    });
});

const addPokemonMovesToDom = pokemon => {
    const moves = pokemon.moves.map(move => {
        return move.move.name;
    });
    const div = document.getElementById('moves');
    div.innerHTML = moves.join(", ");
}

const movesButton = document.querySelector('.Moves');
movesButton.addEventListener('click', () => {
    if (currentPokemon) {
        console.log(currentPokemon)
        addPokemonMovesToDom(currentPokemon)
    }
});
