// POO

class Empleado {
  // Propiedades
  nombre;
  apellido;
  experiencia;
  direccion;
  edad;
  //Propiedad estática
  static empresa = "Mi chambita";
  static nroEmpleados = 0;

  // Método constructor
  constructor(nombre, apellido, experiencia, direccion, edad) {
    this.apellido = apellido;
    this.direccion = direccion;
    this.edad = edad;
    this.experiencia = experiencia;
    this.nombre = nombre;
    // usando la propiedad estática
    Empleado.nroEmpleados++;
  }

  // Métodos
  trabaja() {
    console.log(`${this.nombre} está trabajando`);
  }

  cobrar(sueldo) {
    console.log(`${this.nombre} está cobrando ${this.calcularSueldo(sueldo)}`);
    
  }

  calcularSueldo(sueldo) {
    return sueldo * this.experiencia;
  }

  // Método estático
  static mostrarEmpresa() {
    console.log(`está trabajando en ${Empleado.empresa}`);
  }
}

// Instanciar objetos
const empleado1 = new Empleado("Gustavo", "Sepulveda", 20, "En la casa", 45);
empleado1.trabaja();
empleado1.cobrar(120000);

const empleado2 = new Empleado("Martina", "Carmiña", 18, "Edificio", 32);
empleado2.trabaja();
empleado2.cobrar(150000);

Empleado.mostrarEmpresa();
console.log(Empleado.nroEmpleados);