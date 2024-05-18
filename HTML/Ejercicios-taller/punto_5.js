let numero = parseInt(prompt("ingresa un numero para multiplicar:"));

function tabla(numero) {
    let total = 0;
    console.log("Tabla de multiplicar" + numero + ":");
    for (let i = 1; i <= 10; i++) {
        let resultado = numero * i;
        total += resultado;
        console.log(numero + " x " + i + " = " + resultado);
    }
    console.log("Total de las multiplicaciones: " + total);
}