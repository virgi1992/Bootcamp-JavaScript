interface Partida {
  puntosTotales: number;
  estadoPartida: EstadoPartida;
}

export type EstadoPartida = "por_debajo_maximo" | "hemos_ganado" | "hemos_perdido";

export const partida: Partida = {
  puntosTotales: 0,
  estadoPartida: "por_debajo_maximo",
};

export const setPuntos = (nuevoPunto: number): void => {
  partida.puntosTotales = nuevoPunto;
};
