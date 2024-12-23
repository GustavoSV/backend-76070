import fs from "fs";

export class UsersManager {
  path;
  users;

  constructor(path) {
    this.path = path;
    if (fs.existsSync(path)) {
      try {
        this.users = JSON.parse(fs.readFileSync(this.path, "utf-8"));
      } catch (error) {
        this.users = [];
      }
    } else {
      this.users = [];
    }
  };

  async createUser({ name, lastname, age, course }) {
    const newId = 
      this.users.length > 0 ? this.users[this.users.length - 1].id + 1 : 1;
      
    this.users.push({
      id: newId,
      name, 
      lastname, 
      age, 
      course
    });

    await this.save();

    return {
      newId,
      name,
      lastname,
      age,
      course
    }
  };

  async save() {
    try {
      await fs.promises.writeFile(
        this.path, 
        JSON.stringify(this.users, null, 2));
    } catch (error) {
      console.error("Error al guardar el archivo", error);
    }
  }

  async getUsers() {
    const usuarios = await fs.promises.readFile(this.path, "utf-8");
    this.users = JSON.parse(usuarios);
    return this.users;
  }

}