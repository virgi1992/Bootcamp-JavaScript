import "./style.css";

import {cartas, tablero} from "./modelo";
import { iniciaPartida } from "./motor";


console.log(cartas);

const botonEmpezarPartida = document.getElementById("botonEmpezarPartida");
 if(botonEmpezarPartida && botonEmpezarPartida instanceof HTMLButtonElement){
    botonEmpezarPartida.addEventListener("click", () =>{
        iniciaPartida(tablero);
        console.log(tablero);

    })
 }