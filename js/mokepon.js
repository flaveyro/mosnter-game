//Variables globales
const sectionSeleccionarAtaque = document.getElementById('seleccionar-ataque')
const sectionBotonReiniciar = document.getElementById('reiniciar')
const botonMascotaJugador = document.getElementById("boton-mascota");
const botonFuego = document.getElementById('boton-fuego');
const botonAgua = document.getElementById('boton-agua');
const botonTierra = document.getElementById('boton-tierra')
const botonReiniciar = document.getElementById('boton-reiniciar')


const sectionSeleccionarMascota = document.getElementById('seleccionar-mascota')

const spanMascotaEnemigo = document.getElementById('mascota-enemigo');

spanVidasJugador = document.getElementById('vidas-jugador');
spanVidasEnemigo = document.getElementById('vidas-enemigo');

const parrafoMensaje = document.getElementById('resultado');
const ataquesDelJugador = document.getElementById('ataques-jugador');
const ataquesDelEnemigo = document.getElementById('ataques-enemigo');

const parrafoMensajeFinal = document.getElementById('resultado')

let ataqueJugador;
let ataqueEnemigo;
let vidasEnemigo = 3;
let vidasJugador = 3;

//arreglo para meter los mokepones de la clase
let mokepones = []

//Clases y objetos START
class Mokepon {
    constructor(nombre, foto, vida, ataques){
        this.name = nombre
        this.photo = foto
        this.life = vida
        
    }
}

        //objetos START:
let hipodoge = new Mokepon('Hipodoge', './assets/mokepons_mokepon_hipodoge_attack.webp', 5)
let capipepo = new Mokepon('Capipepo', './assets/mokepons_mokepon_capipepo_attack.webp',5)
let ratigueya = new Mokepon('Ratigueya', './assets/mokepons_mokepon_ratigueya_attack.webp', 5)
console.log(hipodoge)
        //Objetos END

mokepones.push(hipodoge, capipepo, ratigueya)//mete los objetos en el arreglo
console.log(mokepones)
//Clases y objetos END

//funcion para iniciar el juego, leer el botones
function iniciarJuego(){
    //oculta seccion seleccionar ataque
    sectionSeleccionarAtaque.style.display = 'none'
    ///
    //oculta boton reiniciar
    sectionBotonReiniciar.style.display = 'none'
    //
    botonMascotaJugador.addEventListener('click', seleccionarMascotaJugador)
    botonFuego.addEventListener('click', ataqueFuego)
    botonAgua.addEventListener('click', ataqueAgua)
    botonTierra.addEventListener('click', ataqueTierra)
    botonReiniciar.addEventListener('click', reiniciarJuego)
}


//funcion para seleccionar mascota Jugador
function seleccionarMascotaJugador(mascota){
    //Oculta seccion seleccionar mascota
    sectionSeleccionarMascota.style.display = 'none'
    //

    //mostrar seccion seleccionar ataque
    sectionSeleccionarAtaque.style.display = 'flex'
    ///

    //reemplazar el span por la mascota
    let spanMascotaJugador = document.getElementById('mascota-jugador');

    if(mascota = document.getElementById("hipodoge").checked){
        console.log("Jugador escogió Hipodoge")
        spanMascotaJugador.innerHTML = 'Hipodoge';
    } else if (mascota = document.getElementById("capipepo").checked){
        console.log("Jugador escogió Capipepo")
        spanMascotaJugador.innerHTML = 'Capipepo';
    }else if (mascota = document.getElementById('ratigueya').checked){
        console.log('Jugador escogió Ratigueya')
        spanMascotaJugador.innerHTML = 'Ratigueya';
    }else if (mascota = document.getElementById('lamgostelvis').checked){
        console.log('Jugador escogió Lamgostelvis')
        spanMascotaJugador.innerHTML = 'Lamgostelvis'
        
    } else if (mascota = document.getElementById('tucapalma').checked){
        console.log('Jugador escogió Tucapalma')
        spanMascotaJugador.innerHTML = 'Tucapalma'
    }else if (mascota = document.getElementById('pydos').checked){
        console.log('Jugador escogió Pydos')
        spanMascotaJugador.innerHTML = 'Pydos' 
    }else {
        alert('Selecciona una Mascota')
        reiniciarJuego()
    }

    seleccionarMascotaEnemigo()
}

//funcion para quie el enemigo seleccione su mascota de manera aleatoria
function seleccionarMascotaEnemigo(){
    let mascotaAleatorio = aleatorio(1,6)

    if(mascotaAleatorio == 1){
        console.log('Enemigo escogió Hipodoge')
        spanMascotaEnemigo.innerHTML = 'Hipodoge'
    } else if (mascotaAleatorio == 2){
        console.log("Enemigo escogió Capipepo")
        spanMascotaEnemigo.innerHTML = 'Capipepo'
    } else if (mascotaAleatorio == 3){
        console.log('Enemigo escogió Ratigueya')
        spanMascotaEnemigo.innerHTML = 'Ratigueya'
    } else if (mascotaAleatorio == 4){
        console.log('Enemigo escogió Lamgostelvis')
        spanMascotaEnemigo.innerHTML = 'Lamgostelvis'
    } else if (mascotaAleatorio == 5){
        console.log('Enemigo escogió Tucapalma')
        spanMascotaEnemigo.innerHTML = 'Tucapalma'
    } else if (mascotaAleatorio == 6){
        console.log('Enemigo escogió Pydos')
        spanMascotaEnemigo.innerHTML = 'Pydos'
    }

    console.log(mascotaAleatorio)

}



///funciones de ataque por elemento
function ataqueFuego(){
    ataqueJugador = 'FUEGO'
    console.log(ataqueJugador)
    ataqueAleatorioEnemigo()
}

function ataqueAgua(){
    ataqueJugador = 'AGUA'
    console.log(ataqueJugador)
    ataqueAleatorioEnemigo()

}

function ataqueTierra(){
    ataqueJugador = 'TIERRA'
    console.log(ataqueJugador)
    ataqueAleatorioEnemigo()

}

//funcion que define la equivalencia de los ataques aleatorios del enemigo
function ataqueAleatorioEnemigo (){
    let ataqueAleatorio = aleatorio(1,3)

    if (ataqueAleatorio == 1){
        ataqueEnemigo = 'FUEGO'
        console.log(`EL ataque enemigo es ${ataqueEnemigo}`)
    } else if (ataqueAleatorio == 2){
        ataqueEnemigo = 'AGUA'
        console.log(`EL ataque enemigo es ${ataqueEnemigo}`)
    } else {
        ataqueEnemigo = 'TIERRA'
        console.log(`EL ataque enemigo es ${ataqueEnemigo}`)
    }

    combate()

}

//funcion con la logica del combate
function combate (){
    
    
    if (ataqueJugador == ataqueEnemigo){
        crearMensaje(resultado = 'Esto es Empate')
    } else if((
      ataqueJugador == 'FUEGO' && ataqueEnemigo == 'TIERRA') 
      || (ataqueJugador == 'AGUA' && ataqueEnemigo == 'FUEGO') 
      || (ataqueJugador == 'TIERRA' && ataqueEnemigo == 'AGUA')){
        crearMensaje(resultado = 'Gana Jugador')
        vidasEnemigo--
        spanVidasEnemigo.innerHTML = (vidasEnemigo)
    } else{
        crearMensaje(resultado = 'Gana Enemigo')
        vidasJugador--
        spanVidasJugador.innerHTML = (vidasJugador)
    }

    revisarVidas()
    
   
   
}





//funcion para revisar el conteo de vidas
function revisarVidas() {
    if (vidasEnemigo == 0){
        crearMensajeFinal('FELICITACIONES!! Ganaste 😄')
    } else if(vidasJugador == 0){
        crearMensajeFinal('Lo siento, Perdiste 😟')
    }

}


//funcion para generar los mensajes de los resultados de los ataques
function crearMensaje(resultado){
    

    let nuevoAtaqueDelJugador = document.createElement('p')
    let nuevoAtaqueDelEnemigo = document.createElement('p')

    parrafoMensaje.innerHTML = resultado
    nuevoAtaqueDelJugador.innerHTML = ataqueJugador;
    nuevoAtaqueDelEnemigo.innerHTML = ataqueEnemigo;

    ataquesDelJugador.appendChild(nuevoAtaqueDelJugador)
    ataquesDelEnemigo.appendChild(nuevoAtaqueDelEnemigo)

    // ataquesDelJugador.innerHTML = ataqueJugador
    // ataquesDelEnemigo.innerHTML = ataqueEnemigo


    // let parrafo = document.createElement('p');
    // parrafo.innerHTML = (`Tu mascota atacó con ${ataqueJugador}, 
    //   la mascota del enemigo atacó con ${ataqueEnemigo}, ${resultado}`)

}

//funcion para crear el ultimo mensaje en el HTML
function crearMensajeFinal(resultadoFinal){
    // let parrafoFinal = document.createElement('p')
    parrafoMensajeFinal.innerHTML = resultadoFinal

    // parrafoMensajeFinal.appendChild(parrafoFinal)

    //deshabilitar botones al llegar las vidas a 0
    botonFuego.disabled = true;
    botonAgua.disabled = true;
    botonTierra.disabled = true;

    //oculta boton reiniciar
    sectionBotonReiniciar.style.display = 'flex'
    //
}





//algoritmo para escoger un numero aleatorio en tre un max y un min
function aleatorio (min, max){
    return Math.floor(Math.random() * (max - min + 1) + min)
}

// Funcion para reiniciar el juego
function reiniciarJuego(){
    location.reload()
}

//permite tener el src del js en el html al inicio
window.addEventListener('load', iniciarJuego)
 


