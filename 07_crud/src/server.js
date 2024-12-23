import express from 'express';

const app = express();
const PORT = 8080;

// configuración de express
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// iniciando el servidor
app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});

// configurando los datos para trabajar
const users = [
  { id: 1, name: 'John', email: 'jhon@correo.com'},
  { id: 2, name: 'Jane', email: 'jane@correo.com'},
  { id: 3, name: 'Doe', email: 'doe@correo.com'}
]

// RUTAS

// _________________________________________________________
// GET users
// _________________________________________________________
app.get('/users', (req, res) => {
  res.status(200).json(users);
});

// _________________________________________________________
// GET users/:id
// _________________________________________________________
app.get('/users/:id', (req, res) => {
  const { id } = req.params;

  if (isNaN(Number(id))) {
    res.status(400).json({ 
      message: 'El id debe ser un número' });
  }
  const user = users.find(user => user.id == Number(id));
  if (!user) {
    res.status(404).json({ 
      message: `El usuario con id ${id} no existe` });
  } else {
    res.status(200).json(user);
  }
});

// _________________________________________________________
// POST users
// _________________________________________________________
app.post('/users', (req, res) => {
  const { name, email } = req.body;

  if (!name || !email) {
    return res.status(400).json({ 
      message: 'Todos los datos son requeridos' });
  }

  const userExists = users.some(user => user.email === email);
  if (userExists) {
    return res.status(409).json({
      message: 'Un usuario ya tiene el correo electrónico indicado'
    })
  }

  const newUser = {
    id: users[users.length - 1].id + 1,
    name,
    email
  }
  users.push(newUser);
  res.status(201).json({
    message: "Usuario creado",
    user: newUser
  });
});

// _________________________________________________________
// PUT users
// _________________________________________________________
app.put('/users/:id', (req, res) => {
  const { id } = req.params;
  const { name, email } = req.body;

  if (isNaN(Number(id))) {
    return res.status(400).json({ 
      message: 'El id debe ser un número' });
  }

  const user = users.find(user => user.id === Number(id));
  if (!user) {
    return res.status(404).json({ 
      message: `El usuario con id ${id} no existe` });
  }

  if (!name || !email) {
    return res.status(400).json({ 
      message: 'Todos los datos son requeridos' });
  }

  const index = users.findIndex(user => user.id === Number(id));
  user.name = name || user.name;
  user.email = email || user.email;
  users[index] = user;
  res.status(200).json({
    message: "Usuario actualizado",
    user
  });
});

// _________________________________________________________
// DELETE users/:id
// _________________________________________________________
app.delete('/users/:id', (req, res) => {
  const { id } = req.params;

  if (isNaN(Number(id))) {
    return res.status(400).json({ 
      message: 'El id debe ser un número' });
  }

  const user = users.find(user => user.id === Number(id));
  if (!user) {
    return res.status(404).json({ 
      message: `El usuario con id ${id} no existe` });
  }

  const index = users.findIndex(user => user.id === Number(id));
  users.splice(index, 1);
  res.status(200).json({
    message: "Usuario eliminado",
    user
  });
})