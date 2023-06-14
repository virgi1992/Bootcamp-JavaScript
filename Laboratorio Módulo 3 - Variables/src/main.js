import "./style.css";
// Declarando la variable cambiarColor para cambiar los estilos
const cambiarColor = "font-size:16px;font-weight:bold; background-color:green";

// he creado objetos porque quería pasarle un atributo del objeto para que cambiase el estilo

let grupoA = {
  grupo: "The Beatles",
  año: 1960,
  activo: true,
  genero: "🎵Pop Rock",
};
let grupoB = {
  grupo: "Queen",
  año: 1970,
  activo: false,
  genero: "🎸 Rock",
};
let grupoC = {
  grupo: "AC DC",
  año: 1973,
  activo: true,
  genero: "🤘 Hard Rock",
};
let grupoD = {
  grupo: "Ludwig van Beethoven",
  año: 1970,
  activo: false,
  genero: "🎼Clásica",
};
let grupoE = {
  grupo: "The Rolling Stone",
  año: 1962,
  activo: true,
  genero: "🎸 Rock",
};

// como ves no e podido y he optado por la forma mas facil declararlo directamente

console.log(`%c The Beatles/`, cambiarColor, `/1960/activo:true/🎵Pop Rock`);

console.log(`%c Queen/`, cambiarColor, `/1970/activo:false/🎸 Rock`);

console.log(`%c AC DC/`, cambiarColor, `/1973/activo:true/🤘 Hard Rock`);

console.log(
  `%c Ludwig van Beethoven/`,
  cambiarColor,
  `/1970/activo:false/🎼Clásica`
);

console.log(`%c The Rolling Stone/`, cambiarColor, `/1962/activo:true/🎸 Roc`);

// tambien puedo declarar las variables una a una pero se haria muy pesado de todas formas te dejo la prueba para que veas que si se hacerlo

let grupo = "The Beatles";
let año = 1960;
let activo = true;
let genero = "🎵Pop Rock";

console.log(`%c ${grupo} `, cambiarColor);
console.log(`${año}/ ${activo}/ ${genero}`);
