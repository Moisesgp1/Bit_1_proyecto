let Operaciones = {}

function suma(x,y){
    return x + y;
}

function restar(a,b){
    return a -b; 
}

function dividir (j,k){
    if (k == 0) {
        return "no se puede dividir por 0";
    }else {
        return j / k;
    }
}

Operaciones.suma = suma;
Operaciones.restar = restar;
Operaciones.dividir = dividir

module.exports = Operaciones;