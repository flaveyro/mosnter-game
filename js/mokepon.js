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
const contenedorTarjetas = document.getElementById('contenedor-tarjetas')

//arreglo para meter los mokepones de la clase
let mokepones = []

let ataqueJugador;
let ataqueEnemigo;
let opcionMokepones;//variable para el .map

let inputHipodoge
let inputCapipepo
let inputRatigueya
let inPutLamgostelvis 
let inputTtucapalma
let inputPydos

let vidasEnemigo = 3;
let vidasJugador = 3;


//Clases y objetos START
class Mokepon {
    constructor(nombre, foto, vida){
        this.name = nombre
        this.photo = foto
        this.life = vida
        this.ataques = []
        
    }
}

        //objetos START:
let hipodoge = new Mokepon('Hipodoge', './assets/mokepons_mokepon_hipodoge_attack.webp', 5)
let capipepo = new Mokepon('Capipepo', './assets/mokepons_mokepon_capipepo_attack.webp',5)
let ratigueya = new Mokepon('Ratigueya', './assets/mokepons_mokepon_ratigueya_attack.webp', 5)
let lamgostelvis = new Mokepon('Lamgostelvis', './assets/mokepons_mokepon_Lamgostelvis_attack.png', 5 )
let tucapalma = new Mokepon('Tucapalma','./assets/mokepons_mokepon_Tucapalma_attack.png' ,5)
let pydos = new Mokepon('Pydos', './assets/mokepons_mokepon_Pydos_attack.png', 5)
console.log(tucapalma)
        //Objetos END

hipodoge.ataques.push(//objetos literarios
    {nombre: '💧', id: 'boton-agua' },
    {nombre: '💧', id: 'boton-agua' },
    {nombre: '💧', id: 'boton-agua' },
    {nombre: '🔥', id: 'boton-fuego' },
    {nombre: '🌏', id: 'boton-tierra' },
)

capipepo.ataques.push(//objetos literarios
    {nombre: '🌏', id: 'boton-tierra' },
    {nombre: '🌏', id: 'boton-tierra' },
    {nombre: '🌏', id: 'boton-tierra' },
    {nombre: '💧', id: 'boton-agua' },
    {nombre: '🔥', id: 'boton-fuego' },
)

ratigueya.ataques.push(//objetos literarios
    {nombre: '🔥', id: 'boton-fuego' },
    {nombre: '🔥', id: 'boton-fuego' },
    {nombre: '🔥', id: 'boton-fuego' },
    {nombre: '💧', id: 'boton-agua' },
    {nombre: '🌏', id: 'boton-tierra' },
)

lamgostelvis.ataques.push(
    {nombre: '🔥', id: 'boton-fuego' },
    {nombre: '🔥', id: 'boton-fuego' },
    {nombre: '🔥', id: 'boton-fuego' },
    {nombre: '💧', id: 'boton-agua' },
    {nombre: '🌏', id: 'boton-tierra' },
)

tucapalma.ataques.push(
    {nombre: '🔥', id: 'boton-fuego' },
    {nombre: '🔥', id: 'boton-fuego' },
    {nombre: '🔥', id: 'boton-fuego' },
    {nombre: '💧', id: 'boton-agua' },
    {nombre: '🌏', id: 'boton-tierra' },
)

pydos.ataques.push(
    {nombre: '🔥', id: 'boton-fuego' },
    {nombre: '🔥', id: 'boton-fuego' },
    {nombre: '🔥', id: 'boton-fuego' },
    {nombre: '💧', id: 'boton-agua' },
    {nombre: '🌏', id: 'boton-tierra' },
)

mokepones.push(hipodoge,capipepo,ratigueya,lamgostelvis, tucapalma, pydos)

//Clases y objetos END

//funcion para iniciar el juego, leer el botones
function iniciarJuego(){
    //oculta seccion seleccionar ataque
    sectionSeleccionarAtaque.style.display = 'none'
    ///

    //iterar mokepones
    /*mokepones.forEach((mokepon) => {
        console.log(mokepon.ataques)
    })*/

    mokepones.map((mokepon) => {
        console.log(mokepon.name)
                //traemos el HTML a JS
        opcionMokepones = `
        <input type="radio" name="mascota" id=${mokepon.name} />
        <label class="tarjeta-de-mokepon" for=${mokepon.name}>
            <p>${mokepon.name}</p>
            <img src=${mokepon.photo} alt=${mokepon.name}>
        </label>
        `
        contenedorTarjetas.innerHTML += opcionMokepones; //inyectamos la info en el html
    
        ///estas variables se convierten en objetos por el FOREACH o MAP
        inputHipodoge = document.getElementById('Hipodoge')//tomamos al id de opcionMOKEPONES
        inputCapipepo = document.getElementById('Capipepo')
        inputRatigueya = document.getElementById('Ratigueya')
        inPutLamgostelvis = document.getElementById('Lamgostelvis')
        inputTtucapalma = document.getElementById('Tucapalma')
        inputPydos = document.getElementById('Pydos')

    })

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

    if(mascota = document.getElementById("Hipodoge").checked){
        console.log("Jugador escogió Hipodoge")
        spanMascotaJugador.innerHTML = inputHipodoge.id;
    } else if (mascota = document.getElementById("Capipepo").checked){
        console.log("Jugador escogió Capipepo")
        spanMascotaJugador.innerHTML = inputCapipepo.id;
    }else if (mascota = document.getElementById('Ratigueya').checked){
        console.log('Jugador escogió Ratigueya')
        spanMascotaJugador.innerHTML = inputRatigueya.id;
    }else if (mascota = document.getElementById('Lamgostelvis').checked){
        console.log('Jugador escogió Lamgostelvis')
        spanMascotaJugador.innerHTML = inPutLamgostelvis.id
        
    } else if (mascota = document.getElementById('Tucapalma').checked){
        console.log('Jugador escogió Tucapalma')
        spanMascotaJugador.innerHTML = inputTtucapalma.id
    }else if (mascota = document.getElementById('Pydos').checked){
        console.log('Jugador escogió Pydos')
        spanMascotaJugador.innerHTML = inputPydos.id
    }else {
        alert('Selecciona una Mascota')
        reiniciarJuego()
    }

    seleccionarMascotaEnemigo()
}

//funcion para quie el enemigo seleccione su mascota de manera aleatoria
function seleccionarMascotaEnemigo(){
    let mascotaAleatorio = aleatorio(0, mokepones.length -1)//como el arreglo va del 0 al 5 necesitamos ponerle el -1 antes era de 1 a 6 ahora es del 0 al 5

    spanMascotaEnemigo.innerHTML = mokepones[mascotaAleatorio].name

    

    // if(mascotaAleatorio == 1){
    //     console.log('Enemigo escogió Hipodoge')
    //     spanMascotaEnemigo.innerHTML = 'Hipodoge'
    // } else if (mascotaAleatorio == 2){
    //     console.log("Enemigo escogió Capipepo")
    //     spanMascotaEnemigo.innerHTML = 'Capipepo'
    // } else if (mascotaAleatorio == 3){
    //     console.log('Enemigo escogió Ratigueya')
    //     spanMascotaEnemigo.innerHTML = 'Ratigueya'
    // } else if (mascotaAleatorio == 4){
    //     console.log('Enemigo escogió Lamgostelvis')
    //     spanMascotaEnemigo.innerHTML = 'Lamgostelvis'
    // } else if (mascotaAleatorio == 5){
    //     console.log('Enemigo escogió Tucapalma')
    //     spanMascotaEnemigo.innerHTML = 'Tucapalma'
    // } else if (mascotaAleatorio == 6){
    //     console.log('Enemigo escogió Pydos')
    //     spanMascotaEnemigo.innerHTML = 'Pydos'
    // }

    // console.log(mascotaAleatorio)

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
 


