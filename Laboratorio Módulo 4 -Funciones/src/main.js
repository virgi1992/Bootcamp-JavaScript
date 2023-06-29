import "./style.css";

function turnoSiguiente() {
  const cambiar = document.getElementById("numero-turno");

  let numeroTransformado = parseInt(cambiar.innerText);

  console.log(numeroTransformado);
  let resultado = `${++numeroTransformado}`.padStart(2, "0");

  cambiar.innerText = resultado;
}

const siguiente = document.getElementById("boton-siguiente");

siguiente.addEventListener("click", () => turnoSiguiente());

//turno anterior-----------------------------------------------

function turnoAnterior() {
  const cambiar = document.getElementById("numero-turno");

  let numeroTransformado = parseInt(cambiar.innerText);

  console.log(numeroTransformado);
  let resultado = `${--numeroTransformado}`.padStart(2, "0");

  cambiar.innerText = resultado;
}

const anterior = document.getElementById("boton-anterior");

anterior.addEventListener("click", () => turnoAnterior());

// boton de reset-----------------------------------------------------

const reset = document.getElementById("reset-numero");

function reseteo() {
  const cambiar = document.getElementById("numero-turno");

  cambiar.innerText = "0";
}

reset.addEventListener("click", () => reseteo());

//boton cambiar--------------------------------------

let botonCambiar = document.getElementById("cambiar-numero");

function cambiarNumero() {
  const numero = document.getElementById("numero");

  let numeroTransformado = parseInt(numero.value);

  let numeroTurno = document.getElementById("numero-turno");

  numeroTurno.innerText = `${numeroTransformado}`.padStart(2, "0");
}

botonCambiar.addEventListener("click", () => cambiarNumero());
