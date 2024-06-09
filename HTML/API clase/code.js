
let divGrillaPagina = document.querySelector('#grilla-personajes')

let nombreBuscador = document.querySelector("#nombreBuscador")
let botonBuscador = document.querySelector("#botonBuscador")

let imagenPokedex = document.querySelector("#inicioPokedex")

let contenedorBotones = document.querySelector("#contenedorBotones")
let botonPresionarAnterior = document.querySelector("#btnAnterior")
let botonPresionarSiguiente = document.querySelector("#btnSiguiente")

botonPresionarAnterior.setAttribute("data-paginaAnterior", null)
botonPresionarSiguiente.setAttribute("data-paginaSiguiente", "https://pokeapi.co/api/v2/pokemon?offset=20&limit=20")

botonPresionarAnterior.addEventListener("click", (e)=>{
    urlApi = e.target.getAttribute("data-paginaAnterior")
    console.log(urlApi)
    if (urlApi != "null"){
        mostrarApi(urlApi)
    }
    else if (urlApi =="null"){
        console.log("No")
        
    }
})

botonPresionarSiguiente.addEventListener("click", (e)=>{
    urlApi = e.target.getAttribute("data-paginaSiguiente")
    if (urlApi != "null"){
        mostrarApi(urlApi)
    }
})

async function mostrarApi(url_pokeApi= 'https://pokeapi.co/api/v2/pokemon'){
    divGrillaPagina.innerHTML = ""
    
    let dataAPI_pokeapiP1 = await fetch(url_pokeApi)
    let infoPokemon = await dataAPI_pokeapiP1.json()
    let arrayPokemones = infoPokemon.results

    if(infoPokemon.previous != null && infoPokemon.next != null){
        contenedorBotones.classList.remove('justify-content-start');
        contenedorBotones.classList.remove('justify-content-end');
        contenedorBotones.classList.add('justify-content-between');
        botonPresionarSiguiente.setAttribute("class", "d-block")
        botonPresionarAnterior.setAttribute("class", "d-block")
        
    }

    else if(infoPokemon.previous == null && infoPokemon.next != null){
        contenedorBotones.classList.remove('justify-content-between');
        contenedorBotones.classList.remove('justify-content-start');
        contenedorBotones.classList.add('justify-content-end');
        botonPresionarAnterior.setAttribute("class", "d-none")
        botonPresionarSiguiente.setAttribute("class", "d-block")

    }

    else if(infoPokemon.previous != null && infoPokemon.next == null){
        contenedorBotones.classList.remove('justify-content-between');
        contenedorBotones.classList.remove('justify-content-end');
        contenedorBotones.classList.add('justify-content-start');
        botonPresionarSiguiente.setAttribute("class", "d-none")
    }

    for (const pokemon of arrayPokemones){
        let info = await fetch(pokemon.url)
        let personaje = await info.json()
        let tipoPersonaje = []
        personaje.types.forEach(tipo => {
            tipoPersonaje.push(tipo.type.name)
        })
        let alturaPersonaje = (personaje.height * 0.1).toFixed(1)
        let pesoPersonaje = (personaje.weight * 0.1).toFixed(1)
        let barrasEstadisticas = ''
        personaje.stats.forEach(dataStats => {
            if (dataStats.stat.name == 'hp') {
                barrasEstadisticas += `<div><strong> HP:</strong> <div class="progress mb-2 fs-5 h-25" role="progressbar" aria-label="Basic example" aria-valuenow="${dataStats.base_stat}" aria-valuemin="0" aria-valuemax="100">
                <div class="progress-bar bg-success" style="width: ${dataStats.base_stat}%">${dataStats.base_stat}/100</div></div>`
            } else if (dataStats.stat.name == 'attack') {
                barrasEstadisticas += `<div><strong> Ataque: </strong><div class="progress mb-2 fs-5 h-25" role="progressbar" aria-label="Basic example" aria-valuenow="${dataStats.base_stat}" aria-valuemin="0" aria-valuemax="100">
                <div class="progress-bar bg-danger" style="width: ${dataStats.base_stat}%">${dataStats.base_stat}/100</div></div>`
            }
        })
        divGrillaPagina.innerHTML += `
                            <div class="col cartamargin">
                            <div class="card cartamargin">
                            <div id="carruselPokemo_${personaje.id}" class="carousel slide">
                            <div class="carousel-inner">
                                <div class="imagen-poke">
                                    <img src="${personaje.sprites.other["dream_world"].front_default}" class="d-block w-100" alt="...">
                            </div>
                            
                        </div>
                                <div class="card-body">
                                    <h5 class="card-title text-center text-white fs-2 nombre-pokemon mb-0">${personaje.name}</h5>
                                    <ul class="px-4 fs-5">
                                        <li class="d-flex justify-content-between align-items-center pb-2 pt-0 fs-3 "> <strong> N.º: </strong> <strong>${personaje.id}</strong>
                                        </li>
                                        <li class="d-flex justify-content-between align-items-center pb-2"> <strong> Type: </strong> ${tipoPersonaje}
                                        </li>
                                        
                                        ${barrasEstadisticas}
                                        
                                        <li class="d-flex justify-content-between align-items-center pb-2"> <strong> Altura: </strong> ${alturaPersonaje} m
                                        </li>
                                        <li class="d-flex justify-content-between align-items-center pb-2"> <strong> Peso: </strong> ${pesoPersonaje} kg
                                        </li>

                                    </ul> 
                                </div>
                            </div>
                            </div>
                            `
    }
    
    botonPresionarAnterior.setAttribute("data-paginaAnterior", infoPokemon.previous)
    botonPresionarSiguiente.setAttribute("data-paginaSiguiente", infoPokemon.next)
}

mostrarApi()

botonBuscador.addEventListener("click",async ()=>{
    divGrillaPagina.classList.add("d-flex", "justify-content-center")
    botonPresionarSiguiente.setAttribute("class", "d-none")
    botonPresionarAnterior.setAttribute("class", "d-none")
    divGrillaPagina.innerHTML = ""
        let info = await fetch(`https://pokeapi.co/api/v2/pokemon/${nombreBuscador.value}`)
        let personaje = await info.json()
        let tipoPersonaje = []
        personaje.types.forEach(tipo => {
            tipoPersonaje.push(tipo.type.name)
        })
        let alturaPersonaje = (personaje.height * 0.1).toFixed(1)
        let pesoPersonaje = (personaje.weight * 0.1).toFixed(1)
        let barrasEstadisticas = ''
        personaje.stats.forEach(dataStats => {
            if (dataStats.stat.name == 'hp') {
                barrasEstadisticas += `<div><strong> HP:</strong> <div class="progress mb-2 fs-5 h-25" role="progressbar" aria-label="Basic example" aria-valuenow="${dataStats.base_stat}" aria-valuemin="0" aria-valuemax="100">
                <div class="progress-bar bg-success" style="width: ${dataStats.base_stat}%">${dataStats.base_stat}/100</div></div>`
            } else if (dataStats.stat.name == 'attack') {
                barrasEstadisticas += `<div><strong> Ataque: </strong><div class="progress mb-2 fs-5 h-25" role="progressbar" aria-label="Basic example" aria-valuenow="${dataStats.base_stat}" aria-valuemin="0" aria-valuemax="100">
                <div class="progress-bar bg-danger" style="width: ${dataStats.base_stat}%">${dataStats.base_stat}/100</div></div>`
            }
        })
        divGrillaPagina.innerHTML += `
                            <div class="col mt-0 cartamargin">
                            <div class="card cartamargin">
                            <div id="carruselPokemo_${personaje.id}" class="carousel slide">
                            <div class="carousel-inner">
                                <div class="carousel-item active">
                                    <img src="${personaje.sprites.other["official-artwork"].front_default}" class="d-block w-100" alt="...">
                                </div>
                                <div class="carousel-item">
                                    <img src="${personaje.sprites.other.home.front_default}" class="d-block w-100" alt="...">
                                </div>
                                <div class="carousel-item">
                                    <img src="${personaje.sprites.other.home.front_shiny}" class="d-block w-100" alt="...">
                                </div>
                            </div>
                            <button class="carousel-control-prev" type="button" data-bs-target="#carruselPokemo_${personaje.id}" data-bs-slide="prev">
                                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span class="visually-hidden">Previous</span>
                            </button>
                            <button class="carousel-control-next" type="button" data-bs-target="#carruselPokemo_${personaje.id}" data-bs-slide="next">
                                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                <span class="visually-hidden">Next</span>
                            </button>
                        </div>
                                <div class="card-body">
                                    <h5 class="card-title text-center text-white fs-2 nombre-pokemon mb-0">${personaje.name}</h5>
                                    <ul class="px-4 fs-5">
                                        <li class="d-flex justify-content-between align-items-center pb-2 pt-0 fs-3 "> <strong> N.º: </strong> <strong>${personaje.id}</strong>
                                        </li>
                                        <li class="d-flex justify-content-between align-items-center pb-2"> <strong> Type: </strong> ${tipoPersonaje}
                                        </li>
                                        
                                        ${barrasEstadisticas}
                                        
                                        <li class="d-flex justify-content-between align-items-center pb-2"> <strong> Altura: </strong> ${alturaPersonaje} m
                                        </li>
                                        <li class="d-flex justify-content-between align-items-center pb-2"> <strong> Peso: </strong> ${pesoPersonaje} kg
                                        </li>

                                    </ul> 
                                </div>
                            </div>
                            </div>
                            `
})

imagenPokedex.addEventListener("click", ()=>{
    location.reload()
})
