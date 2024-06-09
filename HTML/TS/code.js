console.log('hola mundo desde ts');
var nombre = 'juan';
var edad = 32;
var casado = false;
var fechaNacimiento = new Date();
var vacio = undefined;
var nulo = null;
var indefinido = undefined;
var x = 'hola';
// definir array // 
var transmilenio = ["hola", "mundo"];
var numeros = [1, 2, 3, 4];
var metro = [
    ['hola', 1, 'mundo'],
    ['hola', 2, 'mundo']
];
var hermione = {
    nombre: 'hermione',
    apellido: 'granger',
    edad: 28,
    casa: 'gryffindor',
    hechizos: ['w', 'expelliarmus'],
    muggle: true,
};
var Ron = {
    nombre: 'Ron',
    apellido: 'Weasley',
    edad: 27,
    casa: 'gryffindor',
    hechizos: ['w', 'expelliarmus'],
    muggle: true,
};
function prisioneroAzkaban(personajes) {
    var la_banda = [];
    personajes.forEach(function (personajes) {
        la_banda.push(personajes.nombre);
    });
    return la_banda;
}
prisioneroAzkaban([hermione, Ron]);
var Mago = /** @class */ (function () {
    function Mago() {
    }
    return Mago;
}());
