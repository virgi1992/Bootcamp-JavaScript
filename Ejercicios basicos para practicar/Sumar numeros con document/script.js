function sumar() {
  const numero1 = document.getElementById("Numero1").value;

  const numero2 = document.getElementById("Numero2").value;

  const resultado = parseInt(numero1) + parseInt(numero2);

  document.getElementById("Resultado").innerHTML = resultado;
}

const botonSumar = document.getElementById("Sumar");

botonSumar.addEventListener(`click`, sumar);

//Sacar por pantalla el Nombre completo de Jose Perez

function nombreCompleto() {
  const nombre = document.getElementById("nombre").value;

  const apellido = document.getElementById("apellido").value;

  const resultado2 = `¡¡ Hola ${nombre}  ${apellido} !!`;

  document.getElementById("resultado").innerHTML = resultado2;
}

const botonJuntar = document.getElementById("enviar");

botonJuntar.addEventListener(`click`, nombreCompleto);
