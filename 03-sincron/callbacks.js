// const boton = document.querySelector('button');

// function accionEvento() {
//   console.log("se hizo clic en el boton");
// }

// boton.addEventListener("click", accionEvento());

const numeros = [1,2,3,4,5];

function duplicar(numero) {
  return numero * 2;
}
const resultado = numeros.map((numero) => numero * 2);
console.log(numeros);

const pares = numeros.filter((numero) => numero % 2 === 2);
pares.forEach((par) => console.log(par));

console.log(resultado);
