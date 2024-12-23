import { promises as fs } from "fs";

const usuarios = [
  {
    nombre: "Maria",
    edad: 25,
    cargo: "Analista",
  },
  {
    nombre: "Marcos",
    edad: 51,
    cargo: "Jefe máximo",
  },
  {
    nombre: "Marcela",
    edad: 32,
    cargo: "Supervisora",
  }
];

async function main() {
  await fs.writeFile("usuarios.json", JSON.stringify(usuarios, null, 2));

  let contenido = await fs.readFile("usuarios.json", "utf-8");
  contenido = JSON.parse(contenido);

  contenido.forEach(user => {
    console.log(user.nombre);
  });
}

main();