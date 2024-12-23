import { UsersManager } from "./UsersManager.js";

async function main() {
  const usuarios = new UsersManager("./db/users.json");

  try {
    const user = {
      name: "Gustavo",
      lastname: "Sepulveda",
      age: 36,
      course: "Backend Support" 
    }
    const newUser = await usuarios.createUser(user);
    console.log("Nuevo usuario", newUser);
    console.log("Usuarios", usuarios.getUsers());

  } catch (error) {
    console.log("Error solicitando usuario nuevo.", error);
    
  }
}

main();