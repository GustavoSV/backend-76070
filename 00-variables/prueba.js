let nombre = "gustavo";
let edad = 29;
let altura = 1.78;
let peso = 82.5;

let estaInscrito = true;
let esMayor = edad > 18;

let mascotas = null;

console.log(nombre);
console.log(esMayor);
console.log(peso);

let lenguajes = ["HTML", "CSS", "Javascript"]
console.log(lenguajes[2]);

let empleado = {
  nombre: "Evaristo",
  edad,
  estadoCivil: "Casado",
  direccion: {
    calle: "calle uno",
    numero: "123",
    localidad: "SantaFe"
  }
}
empleado.edad = 45;
empleado.direccion.numero = "25 Norte";
console.log(empleado);

// Desafio
nombre = "María"
edad = 36
precio = 1234.5
series = ["The Pinguin", "La Casa de papel", "Adelante, Bro"]
peliculas = [
  {
    titulo: "Gladiador II",
    director: "Ridley Scott",
    estreno: "14-nov-2024"
  },
  {
    titulo: "Rey Leon - Mufasa",
    director: "Sara Greingrood",
    estreno: "9-dic-2024"
  }
]