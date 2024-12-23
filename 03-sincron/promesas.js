const esPar = (numero) => {
  return new Promise((resolve, reject) => {
    if (isNaN(Number(numero))) {
      return reject({error: "El valor no es un número"});
    }

    if (numero <= 0) {
      return reject({error: "El valor debe ser mayor que cero"});
    }

    if (numero % 2 === 0) {
      return resolve({esPar: true, numero});
    }

    return reject({error: "El número no es par"});
  })
}

const resultado = esPar(8);
console.log(resultado);

esPar("eee")
  .then((resultado) => {
    console.log(resultado.esPar);
    console.log(resultado.numero);
  })
  .catch((error) => {
    console.log(error);
  });