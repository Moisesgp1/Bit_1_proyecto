let grilla = document.querySelector('#grilla-personajes');
let urlPokeapi = 'https://pokeapi.co/api/v2/pokemon';
let paginaactual = 1;

async function obtenerPokemones() {
    let dataAPI = await fetch(urlPokeapi);
    let infoPokemon = await dataAPI.json();
    let arrPokemones = infoPokemon.results;

    for (const pokemon of arrPokemones) {
        let info = await fetch(pokemon.url);
        let pokemonInformacion = await info.json();

        grilla.innerHTML += `
        <div class="card m-3" style="width: 12rem;">
        <div class="imagen" >
            <img src="${pokemonInformacion.sprites.other.dream_world.front_default}" class="card-img-top" alt="${pokemonInformacion.name}">
           </div>
            <div class="card-body">
                <ul class="list-group list-group-flush">
                    <li class="list-group-item"><i class="fa-solid fa-id-card"></i>  ${pokemonInformacion.name}</li>
                    <li class="list-group-item"><i class="fa-solid fa-weight-hanging"></i>:  ${pokemonInformacion.weight}</li>
                    <li class="list-group-item"><i class="fa-solid fa-arrows-up-down"></i>:  ${pokemonInformacion.height}</li>
                    <li class="list-group-item"><i class="fa-brands fa-elementor"></i>   ${pokemonInformacion.types[0].type.name} </li>
                    </ul>
            </div>
        </div>`;

        
    }
}

obtenerPokemones();

