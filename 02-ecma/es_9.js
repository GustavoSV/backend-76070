// operador spread
const empleado1 = {
  nombre: "Pedro",
  apellido: "Perez",
  edad: 30,
  cargo: "tesorero",
}

const empleado2 = {
  nombre: "Martha",
  apellido: "Nuñez",
  cargo: "asistente",
  salario: 1200,
}

const resultado = { ...empleado1, ...empleado2 };
console.log(resultado);
// como resultado, los mezcla
// { 
//   nombre: 'Martha',
//   apellido: 'Nuñez',
//   edad: 30,
//   cargo: 'asistente',
//   salario: 1200
// }

const lista1 = [1, 2, 5];
const lista2 = [4, 5, 6];
const resultadoLista = [ ...lista1, ...lista2 ];
console.log(resultadoLista);
// igualmente loz mezcla así ahayan repetidos
// [ 1, 2, 5, 4, 5, 6 ]


// rest operator

// desestructuración
const {salario, ...demas} = empleado2;
console.log("Salario:", salario);
console.log(demas);

// Nullish &&
const valor = false;
const nro = 0;
const texto = "";

let mensaje1 = valor || "valor indeterminado";
let mensaje2 = valor && "valor indeterminado";
console.log(mensaje1);
console.log(mensaje2);

let mensaje3 = nro || "valor indeterminado";
let mensaje4 = nro && "valor indeterminado";
console.log(mensaje3);
console.log(mensaje4);

let mensaje5 = texto || "valor indeterminado";
let mensaje6 = texto && "valor indeterminado";
console.log(mensaje5);
console.log(mensaje6);