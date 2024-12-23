let array = ["dato1", "dato2", "dato3"];

// se usa includes para buscar un valor dentro de un array

if (array.includes("dato3")) { // devuelve un booleano
  console.log("valor encontrado");
}

// ECMA 8
//
// object.entries devuelve un array de arrays con los pares clave/valor de un objeto
const persona = {
  nombre: "Pedro",
  apellido: "Perez",
  edad: 30,
  direccion: {
    calle: "street peluda",
    ciudad: "bucara",
    pais: "colombie"
  },
}

const entries = Object.entries(persona);
console.log(entries);
console.log(entries[2]);
console.log(entries[2][1]);

// Object.keys para obtener la parte d elas claves del objeto
const keys = Object.keys(persona);
console.log(keys);

// Object.values para obtener lo valores del objeto
const values = Object.values(persona);
console.log("VALORES:", values);
if (values.includes("Perez")) {
  console.log("Existe el sr Perez");
}