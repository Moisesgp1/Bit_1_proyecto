let Grilla = document.querySelector('#grilla-personajes')
let url_pokeapi = 'https://pokeapi.co/api/v2/pokemon'
let dataAPI_pokeapi = fetch(url_pokeapi)
let siguientepagina = fetch('https://pokeapi.co/api/v2/pokemon?offset=20&limit=20')


dataAPI_pokeapi.then(respuestaPromesa => respuestaPromesa.json())
    .then(infojson => {
        infojson.results.forEach(element => {
        let urlPokemon = element.url
        let consumoPokemon = fetch(urlPokemon)
            consumoPokemon.then(respuestaPromesa => respuestaPromesa.json())
                .then(infoPokemon => {
                    
Grilla.innerHTML += `

</div>
<div class="card m-3" style="width: 12rem;">
  <img src="${infoPokemon.sprites.other.dream_world.front_default}" class="card-img-top" alt="...">
  <div class="card-body">


  </div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item">${infoPokemon.name}</li>
    <li class="list-group-item">Peso: ${infoPokemon.weight}</li>
    <li class="list-group-item">tipo: ${infoPokemon.types[0].type.name} </li>
    
  </ul>

`


}).catch(error => {
console.log(error)  })
});
})