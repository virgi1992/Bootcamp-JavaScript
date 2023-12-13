 import { infoCarta } from "./datos";
 
 
 export interface InfoCarta {
    idFoto: number;
    imagen: string;
  }

  export interface Carta {
    // id del 1 al 6 para 12 cartas, así identificamos rápido si es un gatito ,un perrito...
    // el ID se repete 2 veces en el array de cartas (hay dos cartas de un perro, hay dos cartas de un gato)
    // por comodidad repetimos la url de la imagen
    idFoto: number;
    imagen: string; 
    estaVuelta: boolean;
    encontrada: boolean;
  }

  const crearCartaInicial = (idFoto: number, imagen: string): Carta => ({
    idFoto,
    imagen,
    estaVuelta: false,
    encontrada: false,
  });

  const crearColeccionDeCartasInicial = (infoCartas: InfoCarta[]): Carta[] => {
    /* Aquí crearemos un array de cartas a partir de un array de infoCartas
       y duplicaremos las cartas para que haya dos de cada tipo.
    */
   const cartasTransformadas = infoCartas.map((carta) => {
    return crearCartaInicial(carta.idFoto, carta.imagen);
   })
   return [...cartasTransformadas, ...cartasTransformadas];
  };

  export let cartas:Carta[] = crearColeccionDeCartasInicial(infoCarta);

  type EstadoPartida =
  | "PartidaNoIniciada"
  | "CeroCartasLevantadas"
  | "UnaCartaLevantada"
  | "DosCartasLevantadas"
  | "PartidaCompleta";

export interface Tablero {
  cartas: Carta[];
  estadoPartida: EstadoPartida;
  indiceCartaVolteadaA?: number;
  indiceCartaVolteadaB?: number;
}

const crearTableroInicial = (): Tablero => ({
  cartas: cartas,
  estadoPartida: "PartidaNoIniciada",
});

export let tablero: Tablero = crearTableroInicial();