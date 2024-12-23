import { promises as fs } from "fs";

const nombreArchivo = "archivoTexto.txt";

async function main() {
  try {
    await fs.writeFile(nombreArchivo, "Archivo fs con promesas asyn-await");

    await fs.appendFile(nombreArchivo, "\nNueva línea para este archivo");

    let contenido = await fs.readFile(nombreArchivo, "utf-8");

    console.log(contenido);

    await fs.unlink(nombreArchivo);
  } catch (error) {
    console.error(error);
  }
}

main();
