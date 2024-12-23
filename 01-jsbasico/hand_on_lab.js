class Contador {
  contadorAsignado;
  contadorIndividual;

  static contadorGlobal = 0;

  constructor(contadorAsignado) {
    this.contadorAsignado = contadorAsignado;
    this.contadorIndividual = 0;
  }

  contar() {
    this.contadorIndividual++;
    Contador.contadorGlobal++;
  }

  getContadorAsignado() {
    return this.contadorAsignado;
  }

  getCuentaIndividual() {
    return this.contadorIndividual;
  }

  static getCuentaGlobal() {
    return Contador.contadorGlobal;
  }
}

const contador1 = new Contador("Gustavo");
const contador2 = new Contador("Pedro");

contador1.contar();
contador1.contar();
contador1.contar();
contador1.contar();

contador2.contar();
contador2.contar();
contador2.contar();

console.log(contador1.getContadorAsignado());
console.log(contador1.getCuentaIndividual());
console.log(contador2.getContadorAsignado());
console.log(contador2.getCuentaIndividual());
console.log(`Total contadores: ${Contador.getCuentaGlobal()}`);
