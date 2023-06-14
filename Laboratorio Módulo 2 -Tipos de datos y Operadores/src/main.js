import "./style.css";
let amigosCumple = 6;
let compraTicket = 120;
let precioBebidas = 18;
let totalReducido = compraTicket - precioBebidas;
console.log(totalReducido);
console.log(totalReducido / amigosCumple);
let totalAPagar = totalReducido / amigosCumple;
alert(
  `La cantidad que tiene que pagar cada uno en el cumple es de ${totalAPagar} euros `
);
