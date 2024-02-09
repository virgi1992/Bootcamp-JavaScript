 import {Carta, Tablero} from "./modelo";
//barajar las cartas
 const generarNumeroAleatorio = (indiceDelArray: number) =>
  Math.floor(Math.random() * (indiceDelArray + 1));

const barajarCartas = (cartas : Carta[]): Carta[] => {

  const copiaCartas = [...cartas];

  for (let indice = copiaCartas.length - 1; indice > 0; indice--) {
    let indiceAleatorio = generarNumeroAleatorio(indice);
    [{ ...copiaCartas[indice] }, { ...copiaCartas[indiceAleatorio] }] = [
      copiaCartas[indiceAleatorio],
      copiaCartas[indice],
    ];
  }
  return copiaCartas;
}

 export const resetearTablero = (tablero: Tablero) =>{
   tablero.cartas = [ 
    ...tablero.cartas.map((carta) => ({
      ...carta,
      encontrada: false,
      estaVuelta: false
    }))
   ]
   tablero.indiceCartaVolteadaA = undefined; 
   tablero.indiceCartaVolteadaB = undefined; 
   tablero.estadoPartida = "CeroCartasLevantadas";

}
/*
  Una carta se puede voltear si no está encontrada y no está ya volteada, o no hay dos cartas ya volteadas
*/
export const sePuedeVoltearLaCarta = (tablero: Tablero, indice: number ): boolean => {
    return  !tablero.cartas[indice].encontrada && !tablero.cartas[indice].estaVuelta;
  }


  const darLaVueltaALaPrimeraCarta = (tablero : Tablero, indice: number) =>{
    tablero.indiceCartaVolteadaA = indice;
      tablero.estadoPartida = "UnaCartaLevantada";
  }
  const darLaVueltaALaSegundaCarta = (tablero : Tablero, indice: number) =>{
    tablero.indiceCartaVolteadaB = indice; 
      tablero.estadoPartida = "DosCartasLevantadas";
  }
   

  export const voltearLaCarta = (tablero: Tablero, indice: number) : void => {
    tablero.cartas[indice].estaVuelta = true;
    if ( tablero.estadoPartida === "CeroCartasLevantadas"){
      darLaVueltaALaPrimeraCarta(tablero, indice);
    } else if( tablero.estadoPartida === "UnaCartaLevantada"){
      darLaVueltaALaSegundaCarta(tablero , indice);
    }
  }
  
  /*
    Dos cartas son pareja si en el array de tablero de cada una tienen el mismo id
  */
  export const sonPareja = (indiceA: number, indiceB: number, tablero: Tablero): boolean => {
    return tablero.cartas[indiceA].idFoto === tablero.cartas[indiceB].idFoto;
  }
  
  /*
    Aquí asumimos ya que son pareja, lo que hacemos es marcarlas como encontradas y comprobar si la partida esta completa.
  */
  export const parejaEncontrada = (tablero: Tablero, indiceA: number, indiceB: number) : void => {
    tablero.cartas[indiceA].encontrada = true;
    tablero.cartas[indiceA].estaVuelta = true;
    tablero.cartas[indiceB].encontrada = true;
    tablero.cartas[indiceB].estaVuelta = true;
    tablero.indiceCartaVolteadaA = undefined;
    tablero.indiceCartaVolteadaB = undefined;
    tablero.estadoPartida = "CeroCartasLevantadas";
  }
  
//   /*
//     Aquí asumimos que no son pareja y las volvemos a poner boca abajo
//   */
  export const parejaNoEncontrada = (tablero: Tablero, indiceA :number, indiceB : number) : void => {
    tablero.cartas[indiceA].encontrada = false;
    tablero.cartas[indiceA].estaVuelta = false;
    tablero.cartas[indiceB].encontrada = false;
    tablero.cartas[indiceB].estaVuelta = false;
    tablero.indiceCartaVolteadaA = undefined;
    tablero.indiceCartaVolteadaB = undefined;
    tablero.estadoPartida = "CeroCartasLevantadas";
  }
  
//   /*
//     Esto lo podemos comprobar o bien utilizando every, o bien utilizando un contador (cartasEncontradas)
//   */
//   export const esPartidaCompleta(tablero: Tablero) : boolean => {
//     //...
//   }
  

  
  export const iniciaPartida = (tablero: Tablero): void => {
    const cartasBarajadas: Carta[] = barajarCartas(tablero.cartas);
    tablero.cartas = [...cartasBarajadas];
    tablero.estadoPartida = "CeroCartasLevantadas";
    
  };


