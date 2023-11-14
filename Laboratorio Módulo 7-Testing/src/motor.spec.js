import { describe, expect } from "vitest";
import { generarCarta, generarNumeroAleatorio, obtenerPuntos } from "./motor";
import { mostrarCarta, mostrarResultadoMeHePlantado } from "./ui";

describe("generarNumeroAleatorio", () => {
  it("Math.random hacemos que salga un numero en concreto 0.2, deberia de devolver el 2", () => {
    //arranque
    const numeroEsperado = 2;
    vi.spyOn(global.Math, "random").mockReturnValue(0.2);

    //act
    const resultado = generarNumeroAleatorio();

    //assert
    expect(resultado).toBe(numeroEsperado);
  });
});

//Identifica las funciones y componentes que determinan si un jugador ha ganado la partida o no

describe("generarCarta", () => {
  it("deberia de devolver un 2 si el numero aleatorio es un 2", () => {
    //arranque
    const numeroAleatorio = 2;
    const valorEsperado = 2;

    // act
    const resultado = generarCarta(numeroAleatorio);

    //assert
    expect(resultado).toBe(valorEsperado);
  });
  it("deberia de devolver un 10 si el numero aleatori es un 8", () => {
    //arranque
    const numeroAleatorio = 8;
    const numeroEsperado = 10;

    //act
    const resultado = generarCarta(numeroAleatorio);

    //assert
    expect(resultado).toBe(numeroEsperado);
  });
});

describe("obtenerPuntos", () => {
  it("si quiero que salga 0.5 deberia de devolverme 0.5 si le paso un 11", () => {
    //arrangue
    const carta = 11;
    const valorEsperado = 0.5;
    //act
    const resultado = obtenerPuntos(carta);

    //assert
    expect(resultado).toBe(valorEsperado);
  });
});
