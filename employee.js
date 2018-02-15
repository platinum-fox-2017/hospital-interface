class Employee {
  constructor(name,password,role) {
    this.username = name;
    this.password = password;
    this.role = role;
    this.status_login = false;
  }
}

module.exports = Employee;
