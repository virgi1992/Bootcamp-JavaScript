import { partida, setPuntos } from "./modelo";
import {
  generarNumeroAleatorio,
  generarCarta,
  sumarPuntuacion,
  obtenerPuntos,
  obtenerEstadoPartida,
} from "./motor";

const mostrarMensaje = (mensaje: string) => {
  let puntos = document.getElementById("puntuacionAlmacenada");
  if (puntos && puntos instanceof HTMLDivElement) {
    puntos.innerText = mensaje;
  }
};

function mostrarImagen(urlImagen: string) {
  let carta = document.getElementById("carta");
  if (carta && carta instanceof HTMLImageElement) {
    carta.src = urlImagen;
  } else {
    console.log("no existe la imagen");
  }
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
function desabilitarBotonMePlanto(estaDesabilitado: boolean) {
  let botonMePlanto = document.getElementById("mePlantoBoton");
  if (botonMePlanto && botonMePlanto instanceof HTMLButtonElement) {
    botonMePlanto.disabled = estaDesabilitado;
  }
}
function revisarMano() {
  if (obtenerEstadoPartida() === "hemos_ganado") {
    hemosGanadoPartida();
  }
  if (obtenerEstadoPartida() === "hemos_perdido") {
    hemosPerdidoPartida();
  }
}
function hemosGanadoPartida() {
  mostrarMensaje("Hemos ganado la partida ");
  desabilitarBotonPedirCarta(true);
}
function hemosPerdidoPartida() {
  mostrarMensaje("Hemos perdido la partida " + partida.puntosTotales);
  desabilitarBotonPedirCarta(true);
}

function desabilitarBotonPedirCarta(estaDesabilitado: boolean) {
  let botonPedir = document.getElementById("pedirCarta");
  if (botonPedir && botonPedir instanceof HTMLButtonElement) {
    botonPedir.disabled = estaDesabilitado;
  }
}
export function mostrarResultadoMeHePlantado() {
  console.log(partida.puntosTotales);
  if (partida.puntosTotales < 4 && partida.puntosTotales < 5) {
    mostrarMensaje("Ha sido muy conservador " + partida.puntosTotales);
  }
  if (partida.puntosTotales >= 5 && partida.puntosTotales < 6) {
    mostrarMensaje("Te ha entrado el canguelo ");
  }
  if (partida.puntosTotales >= 6 && partida.puntosTotales <= 7) {
    mostrarMensaje("Casi Casi");
  }
  if (partida.puntosTotales === 7.5) {
    mostrarMensaje("Lo has clavado enhorabuena");
  }
}
function mostrarMensajeQueHabriaPasado() {
  if (partida.puntosTotales === 7.5) {
    mostrarMensaje("Habrias ganado el juego");
  }
  partida.puntosTotales < 7.5
    ? mostrarMensaje(
        `No habrias ganado pero estas apunto de ganar, ${partida.puntosTotales}`
      )
    : mostrarMensaje(`Habrias perdido , ${partida.puntosTotales}`);
}

const calcularPuntuacion = (puntos: number) => {
  const nuevosPuntos = sumarPuntuacion(puntos);
  setPuntos(nuevosPuntos);
};

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
  mostrarMensaje(`${partida.puntosTotales}`);
  revisarMano();
};
export function nuevaPartida() {
  setPuntos(0);
  mostrarMensaje("");
  mostrarCarta(0);
  desabilitarBotonPedirCarta(false);
  desabilitarBotonMePlanto(false);
  desabilitarBotonQueHabriaPasado(false);
}
