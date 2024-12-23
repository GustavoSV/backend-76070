function saludar(nombre) {
  return `Bienvenido ${nombre}`
}

const saludar2 = (nombre) => `Bienvenido SALUDO2 ${nombre}`;

console.log(saludar("Gustavo"));
console.log(saludar2("Gustavo"));

const mostrarLista = (lista) => {
  if (lista.length === 0) {
    console.log("La lista está vacía");
    
  } else {
    for (let i = 0; i < lista.length; i++) {
      console.log(`Elemento [${i}] = ${lista[i]}`);
    }
  }
}

mostrarLista(["Gustavo", "Sepúlveda", "Villamizar"]);
mostrarLista([]);