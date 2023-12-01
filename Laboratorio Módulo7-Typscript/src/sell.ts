import "./style.css";
import { queHabriaPasado, mePlanto, cogerCarta, nuevaPartida } from "./ui";

const pedirCartaBoton = document.getElementById("pedirCarta");
if (pedirCartaBoton && pedirCartaBoton instanceof HTMLButtonElement) {
  pedirCartaBoton.addEventListener("click", cogerCarta);
}

const nuevaPartidaBoton = document.getElementById("nuevaPartida");
if (nuevaPartidaBoton && nuevaPartidaBoton instanceof HTMLButtonElement) {
  nuevaPartidaBoton.addEventListener("click", nuevaPartida);
}

const mePlantoBoton = document.getElementById("mePlantoBoton");
if (mePlantoBoton && mePlantoBoton instanceof HTMLButtonElement) {
  mePlantoBoton.addEventListener("click", mePlanto);
}

const queHabriaPasadoBoton = document.getElementById("queHabriaPasado");
if (queHabriaPasadoBoton && queHabriaPasadoBoton instanceof HTMLButtonElement) {
  queHabriaPasadoBoton.addEventListener("click", queHabriaPasado);
}
