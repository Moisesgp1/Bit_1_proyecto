console.log ('hola mundo desde ts');

let nombre:string = 'juan';
let edad:number = 32;
let casado:boolean = false;
let fechaNacimiento:Date = new Date();

let vacio: void= undefined;
let nulo: null = null; 
let indefinido: undefined = undefined;

let x: any = 'hola'

// definir array // 

let transmilenio: string[] = ["hola","mundo"]
let numeros: number[] = [1,2,3,4]
let metro: [string, number, string][] = [
    ['hola', 1, 'mundo'],
    ['hola', 2, 'mundo']
]

interface hhechizosMago{

}

interface harrypotter{
    nombre: string,
    apellido: string,
    edad: number,
    casa: string,
    hechizos: string[],
    muggle: boolean,
}

let hermione : harrypotter = {
    nombre: 'hermione',
    apellido: 'granger',
    edad: 28,
    casa: 'gryffindor',
    hechizos: ['w','expelliarmus'],
    muggle: true,
}

    let Ron : harrypotter = {
        nombre: 'Ron',
        apellido: 'Weasley',
        edad: 27,
        casa: 'gryffindor',
        hechizos: ['w','expelliarmus'],
        muggle: true,
}

function prisioneroAzkaban(personajes: harrypotter[]) : string[]{
    let la_banda: string[] = []
    personajes.forEach(personajes => {
        la_banda.push(personajes.nombre)
        
    });
    return la_banda
}


prisioneroAzkaban([hermione, Ron])

class Mago{

}
