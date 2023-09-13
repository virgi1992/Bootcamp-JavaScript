import "./style.css";

//1. Mostrar puntuación
/*Arranca por crear una variable que almacena la puntuación que lleve el usuario:

Crea una variable para almacenar la puntuación, inicialmente será 0.
Crea un div en el HTML en el que podamos mostrar la puntuación.
Crea una función que se llame muestraPuntuacion que muestre la puntuación actual en el div.
Invoca a la función en cuanto este disponible el DOM.*/

let puntosTotales = 0;

function generarNumeroAleatorio() {
  return Math.ceil(Math.random() * 10);
}
function generarCarta(numeroAleatorio: number) {
  return numeroAleatorio > 7 ? numeroAleatorio + 2 : numeroAleatorio;
}

function cogerCarta() {
  let numeroAleatorio = generarNumeroAleatorio();
  // console.log(numeroAleatorio);
  let numeroCarta = generarCarta(numeroAleatorio);

  mostrarCarta(numeroCarta);
  calcularPuntuacion(numeroCarta);
  mostrarPuntuacion(`${puntosTotales}`);
  revisarMano();
}
function mostrarPuntuacion(puntuacion: string) {
  let puntos = document.getElementById("puntuacionAlmacenada");
  if (puntos) {
    puntos.innerText = puntuacion;
  }
}

function calcularPuntuacion(carta: number) {
  let puntos = obtenerPuntos(carta);

  puntosTotales = puntosTotales + puntos;
}

function obtenerPuntos(carta: number) {
  return carta < 10 ? carta : 0.5;
}

function mostrarCarta(numeroCarta: number) {
  let baseUrl =
    "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas";
  let baseUrlDos =
    "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas";

  switch (numeroCarta) {
    case 1:
      mostrarImagen(baseUrl + "/1_as-copas.jpg");
      break;
    case 2:
      mostrarImagen(baseUrl + "/2_dos-copas.jpg");
      break;
    case 3:
      mostrarImagen(baseUrl + "/3_tres-copas.jpg");
      break;
    case 4:
      mostrarImagen(baseUrl + "/4_cuatro-copas.jpg");
      break;
    case 5:
      mostrarImagen(baseUrl + "/5_cinco-copas.jpg");
      break;
    case 6:
      mostrarImagen(baseUrl + "/6_seis-copas.jpg");
      break;
    case 7:
      mostrarImagen(baseUrl + "/7_siete-copas.jpg");
      break;
    case 10:
      mostrarImagen(baseUrl + "/10_sota-copas.jpg");
      break;
    case 11:
      mostrarImagen(baseUrl + "/11_caballo-copas.jpg");
      break;
    case 12:
      mostrarImagen(baseUrl + "/12_rey-copas.jpg");
      break;
    case 0:
      mostrarImagen(baseUrlDos + "/back.jpg");
      break;
  }
}

function mostrarImagen(urlImagen: string) {
  let carta = document.getElementById("carta");
  if (carta && carta instanceof HTMLImageElement) {
    carta.src = urlImagen;
  } else {
    console.log("no existe la imagen");
  }
}
function hemosGanadoPartida() {
  mostrarPuntuacion("Hemos ganado la partida ");
  desabilitarBotonPedirCarta(true);
}
function hemosPerdidoPartida() {
  mostrarPuntuacion("Hemos perdido la partida " + puntosTotales);
  desabilitarBotonPedirCarta(true);
}
function revisarMano() {
  if (puntosTotales === 7.5) {
    hemosGanadoPartida();
  }
  if (puntosTotales > 7.5) {
    hemosPerdidoPartida();
  }
}
function desabilitarBotonPedirCarta(estaDesabilitado: boolean) {
  let botonPedir = document.getElementById("pedirCarta");
  if (botonPedir && botonPedir instanceof HTMLButtonElement) {
    botonPedir.disabled = estaDesabilitado;
  }
}
const pedirCartaBoton = document.getElementById("pedirCarta");
if (pedirCartaBoton && pedirCartaBoton instanceof HTMLButtonElement) {
  pedirCartaBoton.addEventListener("click", cogerCarta);
}

//boton de nueva partida
function nuevaPartida() {
  puntosTotales = 0;
  mostrarPuntuacion("");
  mostrarCarta(0);
  desabilitarBotonPedirCarta(false);
  desabilitarBotonMePlanto(false);
  desabilitarBotonQueHabriaPasado(false);
}

const nuevaPartidaBoton = document.getElementById("nuevaPartida");
if (nuevaPartidaBoton && nuevaPartidaBoton instanceof HTMLButtonElement) {
  nuevaPartidaBoton.addEventListener("click", nuevaPartida);
}

//boton de me planto

function mePlanto() {
  mostrarResultadoMeHePlantado();
  desabilitarBotonPedirCarta(true);
  desabilitarBotonMePlanto(true);
}

function mostrarResultadoMeHePlantado() {
  console.log(puntosTotales);
  if (puntosTotales < 4 && puntosTotales < 5) {
    mostrarPuntuacion("Ha sido muy conservador " + puntosTotales);
  }
  if (puntosTotales >= 5 && puntosTotales < 6) {
    mostrarPuntuacion("Te ha entrado el canguelo ");
  }
  if (puntosTotales >= 6 && puntosTotales <= 7) {
    mostrarPuntuacion("Casi Casi");
  }
  if (puntosTotales === 7.5) {
    mostrarPuntuacion("Lo has clavado enhorabuena");
  }
}
function desabilitarBotonMePlanto(estaDesabilitado: boolean) {
  let botonMePlanto = document.getElementById("mePlantoBoton");
  if (botonMePlanto && botonMePlanto instanceof HTMLButtonElement) {
    botonMePlanto.disabled = estaDesabilitado;
  }
}

const mePlantoBoton = document.getElementById("mePlantoBoton");
if (mePlantoBoton && mePlantoBoton instanceof HTMLButtonElement) {
  mePlantoBoton.addEventListener("click", mePlanto);
}

//boton que habria psado
const queHabriaPasadoBoton = document.getElementById("queHabriaPasado");
if (queHabriaPasadoBoton && queHabriaPasadoBoton instanceof HTMLButtonElement) {
  queHabriaPasadoBoton.addEventListener("click", queHabriaPasado);
}

function queHabriaPasado() {
  let nuevoNumero = generarNumeroAleatorio();
  let nuevaCarta = generarCarta(nuevoNumero);
  mostrarCarta(nuevaCarta);
  calcularPuntuacion(nuevaCarta);
  mostrarMensajeQueHabriaPasado();
  desabilitarBotonQueHabriaPasado(true);
}
function mostrarMensajeQueHabriaPasado() {
  if (puntosTotales === 7.5) {
    mostrarPuntuacion("Habrias ganado el juego");
  }
  puntosTotales < 7.5
    ? mostrarPuntuacion(
        `No habrias ganado pero estas apunto de ganar, ${puntosTotales}`
      )
    : mostrarPuntuacion(`Habrias perdido , ${puntosTotales}`);
}

function desabilitarBotonQueHabriaPasado(estaDesabilitado: boolean) {
  let botonQueHabriaPasado = document.getElementById("queHabriaPasado");
  if (
    botonQueHabriaPasado &&
    botonQueHabriaPasado instanceof HTMLButtonElement
  ) {
    botonQueHabriaPasado.disabled = estaDesabilitado;
  }
}
