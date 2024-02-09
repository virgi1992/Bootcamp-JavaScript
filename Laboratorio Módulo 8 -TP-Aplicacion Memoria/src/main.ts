import "./style.css";
import { agregarEventoBotonEmpezarPartida, crearTablero } from "./ui";

document.addEventListener("DOMContentLoaded", ()=>{
    crearTablero(); 
    agregarEventoBotonEmpezarPartida();
})
