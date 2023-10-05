import { partida } from "./modelo.js";

export const generarNumeroAleatorio = () => Math.ceil(Math.random() * 10);

export const generarCarta = (numeroAleatorio) =>
  numeroAleatorio > 7 ? numeroAleatorio + 2 : numeroAleatorio;

export const calcularPuntuacion = (puntos) => {
  partida.puntosTotales = partida.puntosTotales + puntos;
};

export const obtenerPuntos = (carta) => (carta < 10 ? carta : 0.5);
