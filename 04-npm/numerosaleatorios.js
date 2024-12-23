// debemos generar 10,000 números aleatorios de 1 a 20

// almacenar en un objeto como clave el número y valor las veces que salió dicho número

const resultado = {};
for (let i=0; i<10000; i++) {
  const nroaleatorio = Math.floor(Math.random() * 20 + 1);
  if (resultado[nroaleatorio]) {
    resultado[nroaleatorio]++;
  } else {
    resultado[nroaleatorio] = 1;
  }
}

console.log(resultado);
