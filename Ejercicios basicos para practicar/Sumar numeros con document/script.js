function sumar() {
  const numero1 = document.getElementById("Numero1").value;

  const numero2 = document.getElementById("Numero2").value;

  const resultado = parseInt(numero1) + parseInt(numero2);

  document.getElementById("Resultado").innerHTML = resultado;
}

const botonSumar = document.getElementById("Sumar");

botonSumar.addEventListener(`click`, sumar);
