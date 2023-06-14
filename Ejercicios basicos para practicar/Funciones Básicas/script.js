//Punto1: Implementa una funcion que saque por consola "Hola Mundo"

function saludar1() {
  return "Hola Mundo";
}
console.log(saludar1());

//Punto2: Implementa una función que admita como parámetro un nombre y salude por consola a dicha persona.

function saludar(nombre) {
  console.log(`Hola ` + nombre);
}

saludar(`Virginia`);
saludar(`LemonCode`);

//Punto3:implementa una funcion que salude directamente a alquien
function saludar2() {
  console.log("Saludar a Pepito directamente");
}

saludar2();

//Punto4: Implementa una función que dado un string como parámetro devuelva el string en mayúsculas.

function mayusculas(letras) {
  return "VirgIniA";
}

console.log(mayusculas().toUpperCase());

//Punto5: Implementa una función que dado un string como parámetro devuelva el string en minúsculas.

function minusculas(letras) {
  return "VIRGINIA";
}

console.log(minusculas().toLowerCase());

//Punto6: Implementa una función que admita 2 números como parámetro y devuelva la suma de ambos.

function numeros(a, b) {
  return a + b;
}

let resultado = numeros(1, 2);

console.log(resultado);
