import fs from "fs";

const nombreArchivo = "archivoTexto.txt";

fs.writeFileSync(nombreArchivo, "Primer línea del archivo");

if (fs.existsSync(nombreArchivo)) {
  let contenido = fs.readFileSync(nombreArchivo, "utf-8");

  fs.appendFileSync(nombreArchivo, "\nSegunda línea del archivo");
  contenido = fs.readFileSync(nombreArchivo, "utf-8");
  console.log(contenido);
  
  fs.unlinkSync(nombreArchivo);
}