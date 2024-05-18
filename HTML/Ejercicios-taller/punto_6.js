let promedioEstudiante = parseFloat(prompt("Por favor, ingresa el promedio del estudiante:"));

function calcularMatricula(promedio) {
    let matriculaBase = 1000000; 
    let descuento = 0; 
    if (promedio < 3) {
        descuento = 0; 
    } else if (promedio >= 3 && promedio <= 4) {
        descuento = "5%"; 
    } else if (promedio > 4) {
        descuento = "50%";
    }
    
    let matriculaFinal = matriculaBase - (matriculaBase * descuento);
    return matriculaFinal;
}

