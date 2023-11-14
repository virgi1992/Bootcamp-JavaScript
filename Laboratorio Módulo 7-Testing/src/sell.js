import "./style.css";
import { queHabriaPasado, mePlanto, cogerCarta, nuevaPartida } from "./ui.js";

const pedirCartaBoton = document.getElementById("pedirCarta");
pedirCartaBoton.addEventListener("click", cogerCarta);

const nuevaPartidaBoton = document.getElementById("nuevaPartida");
nuevaPartidaBoton.addEventListener("click", nuevaPartida);

const mePlantoBoton = document.getElementById("mePlantoBoton");
mePlantoBoton.addEventListener("click", mePlanto);

const queHabriaPasadoBoton = document.getElementById("queHabriaPasado");
queHabriaPasadoBoton.addEventListener("click", queHabriaPasado);
