import { describe, expect, vi } from "vitest";
import { generarNumeroAleatorio } from "./motor";

describe("generarNumeroAleatorio", () => {
  it("Math.random hacemos que salga un numero en concreto 0.2, deberia de devolver el 2", () => {
    //arranque
    const numeroEsperado: number = 2;
    vi.spyOn(global.Math, "random").mockReturnValue(0.2);

    //act
    const resultado: EstadoPartida = generarNumeroAleatorio();

    //assert
    expect(resultado).toBe(numeroEsperado);
  });
});
