import { partida, EstadoPartida } from "./modelo";

export const generarNumeroAleatorio = () => Math.ceil(Math.random() * 10);

export const generarCarta = (numeroAleatorio: number) =>
  numeroAleatorio > 7 ? numeroAleatorio + 2 : numeroAleatorio;

export const obtenerPuntos = (carta: number) => (carta < 10 ? carta : 0.5);

export const sumarPuntuacion = (puntos: number): number => {
  return partida.puntosTotales + puntos;
};

export  const obtenerEstadoPartida =():EstadoPartida =>{
  if(partida.puntosTotales=== 7.5){
    partida.estadoPartida= "hemos_ganado";
  }
  if(partida.puntosTotales > 7.5){
    partida.estadoPartida= "hemos_perdido";
  }
  return partida.estadoPartida;
}