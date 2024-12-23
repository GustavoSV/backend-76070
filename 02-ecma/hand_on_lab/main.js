class TicketManager {
  eventos;
  #precioBaseGanancia = 0.15;

  constructor() {
    this.eventos = [];
  }

  getEventos() {
    return this.eventos;
  }

  agregarEvento({
    nombre, 
    lugar,
    precio,
    capacidad = 50,
    fecha = new Date().toLocaleDateString(),
  }) {

    const evento = {
      id: this.eventos.length
        ? this.eventos[this.eventos.length - 1].id + 1
        : 1,
      nombre,
      lugar,
      precio: precio * (1 + this.#precioBaseGanancia),
      capacidad,
      fecha,
      participantes: [],
    }

    this.eventos.push({ ...evento });
    console.log("Evento agregado:", evento);
    
  }

  agregarUsuario(idEvento, idUsuario) {
    const evento = this.eventos.find((evento) => evento.id === idEvento);
    if (!evento) {
      console.log("NO existe el evento", idEvento);
      return;
    }

    if (evento.participantes.includes(idUsuario)) {
      console.log("El usuario", idUsuario, "ya está registrado en el evento", evento.nombre);
      return;
    }

    evento.participantes.push(idUsuario);
    // buscamos el evento para actualizarlo
    const eventoIndice = this.eventos.findIndex((even) => even.id === idEvento);
    // actualizamos el evento
    this.eventos[eventoIndice] = evento;
    
    console.log("Usuario agregado", evento);
  }

  ponerEventoEnGira(idEvento, nLugar, nFecha) {
    const eventoExiste = this.eventos.find((event) => event.id === idEvento);
    if (!eventoExiste) {
      console.log("NO existe el evento", idEvento);
      return;
    }

    const eventoEnGira = {
      ...eventoExiste,
      id: this.eventos[this.eventos.length - 1].id + 1,
      lugar: nLugar,
      fecha: nFecha,
      participantes: [],
    }
    this.eventos.push(eventoEnGira);
    console.log("Evento en gira", eventoEnGira);    
  }
}

let nuevoTM = new TicketManager();
nuevoTM.agregarEvento({
  nombre: "Shakira Colombia Tour",
  lugar: "Bogotá",
  precio: 200000,
  capacidad: 50000, 
});

nuevoTM.agregarEvento({
  nombre: "Maroon Five",
  lugar: "Miami",
  precio: 150,
  capacidad: 75000, 
});

nuevoTM.agregarUsuario(1, "gustavo");
nuevoTM.agregarUsuario(1, "martha");
nuevoTM.agregarUsuario(1, "gustavo");
nuevoTM.agregarUsuario(2, "josefa");
nuevoTM.agregarUsuario(2, "marcos");
nuevoTM.agregarUsuario(2, "marcos");

nuevoTM.ponerEventoEnGira(2, "New York", "20/12/2024");

console.log("Eventos TM", nuevoTM.getEventos());
