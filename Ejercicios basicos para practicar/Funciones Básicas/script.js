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

//Implementa una función que admita 3 argumentos de tipo string y devuelva otro string con la concatenación de los 3.

let nombre = "Virginia";
let apellido1 = "Martín";
let apellido2 = "Rodriguez";

console.log(
  "la concatenacion de 3 variables: " + nombre + apellido1 + apellido2
);

//concatenar una function

function concatenar(a, b, c) {
  return a + b + c;
}
let resultado2 = concatenar("Virginia", "Martin", "Rodriguez");
console.log(resultado2);

//Implementa una función que admita como parámetro un objeto y añada a dicho objeto una propiedad llamada ‘id’
//inicializada a null.

function admitir(
  objeto = {
    nombre2: "virgi",
    apellido1: "Martin",
    apellido2: "rodriguez",
    id: null,
  }
) {
  return objeto;
}

let result = admitir();

console.log(result);

result.id = 2;

//siguiente ejercicios

let color = "color:green; font-size:20px";

console.log(`%c Funciones con if/else, switches y comprobaciones `, color);

//Implementa una función que admita un parámetro, de cualquier tipo, y que compruebe si el parámetro es undefined o null

function cualquierTipo(hola) {
  return;
}
let resultado3 = cualquierTipo();

console.log(resultado3);

//Implementa una función que admita un número como parámetro y devuelva si el número es positivo o negativo.

function admitirNumero(a) {
  return a;
}
let resultado4 = admitirNumero(2);

if (resultado4 >= 0) {
  console.log("El numero es positivo");
} else {
  console.log("El numero es negativo");
}
