class teclapiano{
constructor(nota,letra){
    this.nota=nota
    this.letra=letra
    this.elemento = document.createElement('div');
    this.elemento.innerText = `${this.letra}`;
    this.elemento.classList.add('tecla-piano','text-center');
    this.elemento.dataset.nota = this.nota;
    this.elemento.addEventListener('click', this.reproducirSonido.bind(this));
    //this.elemento.addEventListener('keypress', this.reproducirSonido.bind(this))
}

reproducirSonido(){
    let audio = new Audio (`audio/${this.nota}`);
    audio.play();
}


}

let teclasPiano = [
  new teclapiano ("nota1.mp3", "A"),
  new teclapiano ("nota2.mp3", "S"),
  new teclapiano ("nota3.mp3", "D"),
  new teclapiano ("nota4.mp3", "F"),
  new teclapiano ("nota5.mp3", "G"),
  new teclapiano ("nota6.mp3", "H"),
  new teclapiano ("nota7.mp3", "J"),
  new teclapiano ("nota8.mp3", "K"),
];

let pianoContainer = document.querySelector('#piano');
teclasPiano.forEach(tecla => {
    pianoContainer.appendChild(tecla.elemento);
})

document.addEventListener('keydown', (evento) => {
    let press = evento.key
    let buscarTecla = teclasPiano.find(tecla1 => tecla1.letra == press)

    

    if (press !== undefined) (
        buscarTecla.reproducirSonido()
    )
})

