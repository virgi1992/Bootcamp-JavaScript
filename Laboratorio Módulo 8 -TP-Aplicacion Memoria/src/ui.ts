import { iniciaPartida, resetearTablero, sePuedeVoltearLaCarta, voltearLaCarta , sonPareja , parejaEncontrada , parejaNoEncontrada } from "./motor"
import { Tablero, tablero , Carta} from "./modelo"

const ponemosTodasLasCartasBocaAbajo = () =>{
    for ( let i = 0; i < tablero.cartas.length; i++){
        darleVueltaALaCarta(i);
    }
}

const darleVueltaALaCarta =(indice: number)=>{
    const dataIndiceId = `img[data-indice-id="${indice}"]`;
    const elementoImg = document.querySelector(dataIndiceId);
    if (elementoImg && elementoImg instanceof HTMLImageElement){
        elementoImg.src = "";
        elementoImg.style.backgroundColor = "rgb(134, 192, 243)";
    }
}

const handleDivCarta = (tablero: Tablero, indiceCarta:number, elementoImg: HTMLImageElement) =>{
    // console.log ("hola virgi")
    if(sePuedeVoltearLaCarta(tablero, indiceCarta )){
        voltearCarta(tablero, indiceCarta, elementoImg);
    }
}

const voltearCarta = (tablero: Tablero, indiceCarta: number , elementoImg : HTMLImageElement) =>{
    const urlImg = tablero.cartas[indiceCarta].imagen;
    voltearLaCarta(tablero, indiceCarta);
    mostrarImagenAnimal(elementoImg, urlImg);
    mirarSiEsLaSegundaCarta(tablero);
     console.log( tablero);
}

const mapearDivsCartas = (indiceCarta: number, tablero: Tablero) =>{
    const dataIndiceId = `[data-indice-id="${indiceCarta}"]`;
    const elementoDiv = document.querySelector(`div${dataIndiceId}`);
    const elementoImg = document.querySelector(`img${dataIndiceId}`);
    if ( elementoDiv && elementoDiv instanceof HTMLDivElement && elementoImg && elementoImg instanceof HTMLImageElement){
        elementoDiv.addEventListener("click", ()=>{
            if (tablero.estadoPartida !== "PartidaNoIniciada"){
                handleDivCarta(tablero, indiceCarta, elementoImg);  

            }
        })
    }
} 

export const crearTablero = () =>{
    for ( let i = 0; i < tablero.cartas.length; i++){
        mapearDivsCartas(i, tablero);
    }
}

const clickBotonEmpezarPartida = () =>{
    iniciaPartida(tablero);
    resetearTablero(tablero);
    ponemosTodasLasCartasBocaAbajo();
    
}

export const agregarEventoBotonEmpezarPartida = () =>{
    const botonEmpezarPartida = document.getElementById("botonEmpezarPartida");
    if (botonEmpezarPartida && botonEmpezarPartida instanceof HTMLButtonElement){
        botonEmpezarPartida.addEventListener("click", () =>{
            clickBotonEmpezarPartida();
        })
    }
}

const mostrarImagenAnimal = (elementoImg: HTMLImageElement , urlImg : string) => {
    elementoImg.src = urlImg;
    elementoImg.style.transform = "rotateY(180deg)";
    elementoImg.style.transition = "all 0.5s linear";
}

const mirarSiEsLaSegundaCarta = (tablero : Tablero) =>{
    const indiceA = tablero.indiceCartaVolteadaA;
    const indiceB = tablero.indiceCartaVolteadaB;
     if(indiceA !== undefined && indiceB !== undefined){
        sonPareja(indiceA , indiceB , tablero) ? encontradaPareja(tablero, indiceA, indiceB) : noEncontradaPareja(tablero, indiceA, indiceB);
     };
}
const encontradaPareja = (tablero: Tablero, indiceA: number , indiceB: number) =>{
    parejaEncontrada(tablero , indiceA , indiceB);
}

const noEncontradaPareja = (tablero: Tablero, indiceA: number , indiceB: number) =>{
    parejaNoEncontrada(tablero, indiceA, indiceB);
    voltearLasCartasQueNoSonPareja(tablero.cartas);
}

const voltearLasCartasQueNoSonPareja = (cartas : Carta[]) =>{
    setTimeout(() => ponerImagenesBocaAbajo(cartas), 1000);
}

const ponerImagenesBocaAbajo = (cartas: Carta[]) =>{
    for (let i= 0 ; i < cartas.length ; i++){
        if(!cartas[i].encontrada && !cartas[i].estaVuelta){
            darleLaVueltaALaCarta(i);
        }  
    }
}

const darleLaVueltaALaCarta = (indice: number) =>{
    const dataIndiceId = `[data-indice-id="${indice}"]`;
    const elementoImg = document.querySelector(`img${dataIndiceId}`);
    if (elementoImg && elementoImg instanceof HTMLImageElement){
        elementoImg.src = "";
        elementoImg.style.transform = "";
        elementoImg.style.transition = "";
    }

}