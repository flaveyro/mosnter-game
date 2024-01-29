//Variables globales
let ataqueJugador;
let ataqueEnemigo;
let vidasEnemigo = 3;
let vidasJugador = 3;
//funcion para iniciar el juego, leer el botones
function iniciarJuego(){
    //oculta seccion seleccionar ataque
    let sectionSeleccionarAtaque = document.getElementById('seleccionar-ataque')
    sectionSeleccionarAtaque.style.display = 'none'
    ///

    //oculta boton reiniciar
    let sectionBotonReiniciar = document.getElementById('reiniciar')
    sectionBotonReiniciar.style.display = 'none'
    //

    let botonMascotaJugador = document.getElementById("boton-mascota");
    botonMascotaJugador.addEventListener('click', seleccionarMascotaJugador)

    let botonFuego = document.getElementById('boton-fuego');
    botonFuego.addEventListener('click', ataqueFuego)

    let botonAgua = document.getElementById('boton-agua');
    botonAgua.addEventListener('click', ataqueAgua)

    let botonTierra = document.getElementById('boton-tierra')
    botonTierra.addEventListener('click', ataqueTierra)

    let botonReiniciar = document.getElementById('boton-reiniciar')
    botonReiniciar.addEventListener('click', reiniciarJuego)
}


//funcion para seleccionar mascota Jugador
function seleccionarMascotaJugador(mascota){
    //Oculta seccion seleccionar mascota
    let sectionSeleccionarMascota = document.getElementById('seleccionar-mascota')
    sectionSeleccionarMascota.style.display = 'none'
    //

    //mostrar seccion seleccionar ataque
    let sectionSeleccionarAtaque = document.getElementById('seleccionar-ataque')
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
    let spanMascotaEnemigo = document.getElementById('mascota-enemigo');

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
    spanVidasJugador = document.getElementById('vidas-jugador');
    spanVidasEnemigo = document.getElementById('vidas-enemigo');
    
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

//funcion para crear el ultimo mensaje en el HTML
function crearMensajeFinal(resultadoFinal){
    let parrafoMensajeFinal = document.getElementById('resultado')

    // let parrafoFinal = document.createElement('p')
    parrafoMensajeFinal.innerHTML = resultadoFinal

    // parrafoMensajeFinal.appendChild(parrafoFinal)

    //deshabilitar botones al llegar las vidas a 0
    let botonFuego = document.getElementById('boton-fuego');
    botonFuego.disabled = true;

    let botonAgua = document.getElementById('boton-agua');
    botonAgua.disabled = true;

    let botonTierra = document.getElementById('boton-tierra')
    botonTierra.disabled = true;

     //oculta boton reiniciar
     let sectionBotonReiniciar = document.getElementById('reiniciar')
     sectionBotonReiniciar.style.display = 'flex'
     //
}

//funcion para generar los mensajes de los resultados de los ataques
function crearMensaje(resultado){
    let parrafoMensaje = document.getElementById('resultado');
    let ataquesDelJugador = document.getElementById('ataques-jugador');
    let ataquesDelEnemigo = document.getElementById('ataques-enemigo');

    parrafoMensaje.innerHTML = resultado
    ataquesDelJugador.innerHTML = ataqueJugador
    ataquesDelEnemigo.innerHTML = ataqueEnemigo


    // let parrafo = document.createElement('p');
    // parrafo.innerHTML = (`Tu mascota atacó con ${ataqueJugador}, 
    //   la mascota del enemigo atacó con ${ataqueEnemigo}, ${resultado}`)

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
 


