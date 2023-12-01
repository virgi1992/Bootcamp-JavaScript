import { describe, expect, vi } from "vitest";
import { generarCarta, generarNumeroAleatorio, obtenerPuntos, sumarPuntuacion,obtenerEstadoPartida  } from "./motor";
import {EstadoPartida, partida} from "./modelo";


describe("generarNumeroAleatorio", () => {
  it("Math.random hacemos que salga un numero en concreto 0.2, deberia de devolver el 2", () => {
    //arranque
    const numeroEsperado: number = 2;
    vi.spyOn(global.Math, "random").mockReturnValue(0.2);

    //act
    const resultado: number = generarNumeroAleatorio();

    //assert
    expect(resultado).toBe(numeroEsperado);
  });
});

//Identifica las funciones y componentes que determinan si un jugador ha ganado la partida o no

describe("generarCarta", () => {
  it("deberia de devolver un 2 si el numero aleatorio es un 2", () => {
    //arranque
    const numeroAleatorio: number = 2;
    const valorEsperado: number = 2;

    // act
    const resultado: number = generarCarta(numeroAleatorio);

    //assert
    expect(resultado).toBe(valorEsperado);
  });
  it("deberia de devolver un 10 si el numero aleatorio es un 8", () => {
    //arranque
    const numeroAleatorio: number = 8;
    const numeroEsperado: number = 10;

    //act
    const resultado: number = generarCarta(numeroAleatorio);

    //assert
    expect(resultado).toBe(numeroEsperado);
  });
});

describe("obtenerPuntos", () => {
  it("si quiero que salga 0.5 deberia de devolverme 0.5 si le paso un 11", () => {
    //arrangue
    const carta: number = 11;
    const valorEsperado: number = 0.5;
    //act
    const resultado: number = obtenerPuntos(carta);

    //assert
    expect(resultado).toBe(valorEsperado);
  });
});

describe("sumarPuntuacion", () => {
  it("Debe devolver el valor de resultado Esperado cuando le paso que puntos vale 5 y puntosTotales vale 0", () => {
    //arranque
    const puntos: number = 5;

    const resultadoEsperado: number = 5;
    vi.spyOn(partida , "puntosTotales", "get").mockReturnValue(0);


    //act
    const resultado: number = sumarPuntuacion(puntos);

    //assert
    expect(resultado).toBe(resultadoEsperado);
  });

  it("si quiero sumar a y b y que me devuelva la suma de ambos", () => {
    //arranque
    const puntos: number = 15 ;

    const resultadoEsperado: number = 35;
    vi.spyOn(partida , "puntosTotales", "get").mockReturnValue(20);


    //act
    const resultado: number = sumarPuntuacion(puntos);

    //assert
    expect(resultado).toBe(resultadoEsperado);
  });

  
});

describe( "obtenerEstadoPartida", ()=>{
 it("deberia de devolver por_debajo_maximo cuando puntosTotales < 7.5",()=>{
  //arranque
  const estadoEsperado:EstadoPartida = "por_debajo_maximo";
  vi.spyOn(partida, "puntosTotales", "get").mockReturnValue(4);

  //act
  const resultado: EstadoPartida =obtenerEstadoPartida();

  //assert
  expect(resultado).toBe(estadoEsperado);
 });

 it("deberia de devolver hemos ganado cuando puntosTotales sea === 7.5",()=>{
  //arrange
  const estadoEsperado:EstadoPartida = "hemos_ganado";
  vi.spyOn(partida, "puntosTotales", "get").mockReturnValue(7.5);

  //act
  const resultado: EstadoPartida =obtenerEstadoPartida();

  //assert
  expect(resultado).toBe(estadoEsperado);
 })
 it("deberia de devolver hemos perdido cuando puntosTotales sea > 7.5",()=>{
  //arrange
  const estadoEsperado:EstadoPartida = "hemos_perdido";
  vi.spyOn(partida, "puntosTotales", "get").mockReturnValue(8);

  //act
  const resultado: EstadoPartida =obtenerEstadoPartida();

  //assert
  expect(resultado).toBe(estadoEsperado);
 })
})