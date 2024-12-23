const crypto = require('crypto'); // por defecto trabaja con CommonJS

class UsersManager {
  static USERS = [];
  
  static createUser({ name, lastsname, username, pass, }) {
    const hashPassword = crypto
      .createHash("sha256", "sEcrEt")
      .update(pass)
      .digest("hex");

    UsersManager.USERS.push({
      name,
      lastsname,
      username,
      pass: hashPassword,
    })

    return { user: {name, lastsname, username }}
  }

  static showUsers() {
    return UsersManager.USERS;
  }

  static login({username, password}) {
    const user = UsersManager.USERS.find((user) => user.username === username);

    if (!user) {
      return `El usuario ${username} no se encuentra`;
    }

    const hashPassword = crypto
      .createHash("sha256", "sEcrEt")
      .update(password)
      .digest("hex")

    if (user.password !== hashPassword) {
      return "Password inválido";
    }

    return "Login success";
  }
}

UsersManager.createUser({
  name: "Gustavo",
  lastsname: "Sepulveda",
  username: "gus00",
  pass: "clave123"
});

UsersManager.createUser({
  name: "Martha",
  lastsname: "Ariza",
  username: "mmm556",
  pass: "pass1234"
});

console.log(UsersManager.showUsers());
console.log(UsersManager.login({
  username: "gus00",
  password: "1234"
}));
