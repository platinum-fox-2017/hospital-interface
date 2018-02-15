class Employee {
  constructor(name, position, username, password) {
    this.name = name;
    this.position = position;
    this.username = username;
    this.password = password;
    this.hasloggedin = false;
  }
}

module.exports = Employee
