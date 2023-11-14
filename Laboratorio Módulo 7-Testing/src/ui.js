import { partida } from "./modelo.js";
import {
  generarNumeroAleatorio,
  generarCarta,
  calcularPuntuacion,
  obtenerPuntos,
} from "./motor.js";

const mostrarPuntuacion = (puntuacion) => {
  let puntos = document.getElementById("puntuacionAlmacenada");
  if (puntos) {
    puntos.innerText = puntuacion;
  }
};

function mostrarImagen(urlImagen) {
  let carta = document.getElementById("carta");
  if (carta) {
    carta.src = urlImagen;
  } else {
    console.log("no existe la imagen");
  }
}
function desabilitarBotonQueHabriaPasado(estaDesabilitado) {
  let botonQueHabriaPasado = document.getElementById("queHabriaPasado");
  if (botonQueHabriaPasado) {
    botonQueHabriaPasado.disabled = estaDesabilitado;
  }
}

export function mostrarCarta(numeroCarta) {
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
function desabilitarBotonMePlanto(estaDesabilitado) {
  let botonMePlanto = document.getElementById("mePlantoBoton");
  if (botonMePlanto) {
    botonMePlanto.disabled = estaDesabilitado;
  }
}
function revisarMano() {
  if (partida.puntosTotales === 7.5) {
    hemosGanadoPartida();
  }
  if (partida.puntosTotales > 7.5) {
    hemosPerdidoPartida();
  }
}
function hemosGanadoPartida() {
  mostrarPuntuacion("Hemos ganado la partida ");
  desabilitarBotonPedirCarta(true);
}
function hemosPerdidoPartida() {
  mostrarPuntuacion("Hemos perdido la partida " + partida.puntosTotales);
  desabilitarBotonPedirCarta(true);
}

function desabilitarBotonPedirCarta(estaDesabilitado) {
  let botonPedir = document.getElementById("pedirCarta");
  if (botonPedir) {
    botonPedir.disabled = estaDesabilitado;
  }
}
export function mostrarResultadoMeHePlantado() {
  console.log(partida.puntosTotales);
  if (partida.puntosTotales < 4 && partida.puntosTotales < 5) {
    mostrarPuntuacion("Ha sido muy conservador " + partida.puntosTotales);
  }
  if (partida.puntosTotales >= 5 && partida.puntosTotales < 6) {
    mostrarPuntuacion("Te ha entrado el canguelo ");
  }
  if (partida.puntosTotales >= 6 && partida.puntosTotales <= 7) {
    mostrarPuntuacion("Casi Casi");
  }
  if (partida.puntosTotales === 7.5) {
    mostrarPuntuacion("Lo has clavado enhorabuena");
  }
}
function mostrarMensajeQueHabriaPasado() {
  if (partida.puntosTotales === 7.5) {
    mostrarPuntuacion("Habrias ganado el juego");
  }
  partida.puntosTotales < 7.5
    ? mostrarPuntuacion(
        `No habrias ganado pero estas apunto de ganar, ${partida.puntosTotales}`
      )
    : mostrarPuntuacion(`Habrias perdido , ${partida.puntosTotales}`);
}

export function queHabriaPasado() {
  let nuevoNumero = generarNumeroAleatorio();
  let nuevaCarta = generarCarta(nuevoNumero);
  mostrarCarta(nuevaCarta);
  const puntos = obtenerPuntos(nuevaCarta);

  calcularPuntuacion(puntos);
  mostrarMensajeQueHabriaPasado();
  desabilitarBotonQueHabriaPasado(true);
}
export function mePlanto() {
  mostrarResultadoMeHePlantado();
  desabilitarBotonPedirCarta(true);
  desabilitarBotonMePlanto(true);
}
export const cogerCarta = () => {
  let numeroAleatorio = generarNumeroAleatorio();
  let numeroCarta = generarCarta(numeroAleatorio);
  mostrarCarta(numeroCarta);

  const puntos = obtenerPuntos(numeroCarta);
  calcularPuntuacion(puntos);
  mostrarPuntuacion(partida.puntosTotales);
  revisarMano();
};
export function nuevaPartida() {
  partida.puntosTotales = 0;
  mostrarPuntuacion("");
  mostrarCarta(0);
  desabilitarBotonPedirCarta(false);
  desabilitarBotonMePlanto(false);
  desabilitarBotonQueHabriaPasado(false);
}
