// punto 1 // 
document.querySelector('#punto1').addEventListener('submit', function(e) {
    e.preventDefault()
    let numero = parseInt(e.target.valorSumatoria.value)
    let sumatoria = 0
    for (let i = 1; i <= numero; i++) {
        sumatoria += i
    }
    document.querySelector('#resultadoPunto1').innerHTML = `<p>La suma de numeros del 1 al ${numero} es ${sumatoria}</p>`
})

//punto 2//
document.querySelector('#punto2').addEventListener('submit', function(e) {
    e.preventDefault()
    let numero = parseInt(e.target.valorPunto2.value)

    let resultado = (numero % 2 === 0) ? 'par' : 'impar'
    document.querySelector('#resultadoPunto2').innerHTML = `<p>El numero ${numero} es ${resultado}</p>`
})

//punto 3//
document.querySelector('#punto3').addEventListener('submit', function(e) {
    e.preventDefault()
    let edad = parseInt(e.target.edadp3.value)
    let genero = e.target.generoP3.value
    let resultado = ''
    if (edad <= 10 || edad >= 18) {
        if (genero == 'hombre') {
            if (edad <= 10) {
                resultado = 'Gana una pizza de 3 carnes y un juguito'
            } else if (edad >= 18) {
                resultado = 'Gana una pizza de 3 carnes y una cerveza'
            }
        } else if (genero == 'mujer') {
            if (edad <= 10) {
                resultado = 'Gana una pizza hawaina y un juguito'
            } else if (edad >= 18) {
                resultado = 'Gana una pizza hawaina y una cerveza'
            }
        }
    } else {
        resultado = 'No gana nada'
    }
    document.querySelector('#resultadoPunto3').innerHTML = `<p>${resultado}</p>`
})

// punto 4 menus//
let Menu = [{
    plato: 'Pasta',
    precio: 10000
}, {
    plato: 'Pescado',
    precio: 15000
}, {
    plato: 'Carne',
    precio: 20000
}, {
    plato: 'Pollo',
    precio: 12000
}, {
    plato: 'Sopa',
    precio: 8000
}]
for (const platico of Menu) {
    document.querySelector('#Menu').innerHTML += `<li>${platico.plato} - ${platico.precio}</li>`
}
let valorMenu = 0
document.querySelector("#punto4V2").addEventListener('submit', function(e) {
    e.preventDefault()
    let plato = e.target.valorPunto4V2.value
    if (plato != 'pagar') {
        let platoEncontrado = Menu.find((valor) => valor.plato == plato)
        valorMenu = (platoEncontrado != undefined) ? valorMenu + parseInt(platoEncontrado.precio) : '';
        (platoEncontrado == undefined) ? document.querySelector('#resultadoPunto4V2').innerHTML = `<p>El plato ${plato} no se encuentra en el menu</p>`: ''
    } else {
        if (valorMenu > 0) {
            document.querySelector('#resultadoPunto4V2').innerHTML = `<p>El total de la cuenta es ${valorMenu}</p>`
        } else {
            document.querySelector('#resultadoPunto4V2').innerHTML = `<p>Toca comprar cosas primero</p>`
        }
    }
})

// punto 5 // 
document.querySelector('#punto5').addEventListener('submit', function(e) {
    e.preventDefault()
    document.querySelector('#resultadoPunto5').innerHTML = ''
    let numero = parseInt(e.target.valorTabla.value)
    let limite = parseInt(e.target.limiteTabla.value)
    let resultado = ''
    if (limite != '') {
        for (let i = 1; i <= limite; i++) {
            resultado += `<p>${numero} x ${i} = ${numero * i}</p>`
        }
    }
    document.querySelector('#resultadoPunto5').innerHTML = resultado
})

// punto 6 // 

document.querySelector('#punto6').addEventListener('submit', function(e) {
    e.preventDefault()
    let promedio = parseFloat(e.target.valorPunto6.value)
    let valorMatricula = 1000000
    if (promedio < 3) {
        document.querySelector('#resultadoPunto6').innerHTML = `<p>No tiene ningun descuento por vago</p>`
    } else if (promedio >= 3 && promedio < 4) {
        document.querySelector('#resultadoPunto6').innerHTML = `<p>El descuento es del 5% y el valor a pagar es ${valorMatricula - (valorMatricula * 0.05)}</p>`
    } else if (promedio >= 4 && promedio <= 5) {
        document.querySelector('#resultadoPunto6').innerHTML = `<p>El descuento es del 50% y el valor a pagar es ${valorMatricula - (valorMatricula * 0.5)}</p>`
    } else {
        document.querySelector('#resultadoPunto6').innerHTML = `<p>El promedio no es valido</p>`
    }
})
