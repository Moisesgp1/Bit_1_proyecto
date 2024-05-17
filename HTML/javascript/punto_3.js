let edad = parseInt(prompt("Ingrese su edad: "));
let genero = prompt("Ingrese su género (Hombre/Mujer): ");

let premio = validarPremio(edad, genero);
console.log("Usted recibe:", premio);

function validarPremio(edad, genero) {
    if (edad <= 10) {
        if (genero === "mujer") {
            return "Puedes reclamar un jugo y una porción de pizza Hawaiana.";
        } else if (genero === "hombre") {
            return "Puedes reclamar un jugo y una porción de pizza tres carnes.";
        } else {
            return "Lo siento, solo puedes reclamar un jugo.";
        }
    } else if (edad >= 18) {
        if (genero === "mujer") {
            return "Puedes reclamar una cerveza y una porción de pizza Hawaiana.";
        } else if (genero === "hombre") {
            return "Puedes reclamar una cerveza y una porción de pizza tres carnes.";
        } else {
            return "Lo siento, solo puedes reclamar una cerveza.";
        }
    } else {
        return "Lo siento, no recibes ningún premio.";
    }
}


