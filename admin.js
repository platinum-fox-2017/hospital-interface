let Employee = require('./employee.js')

class Admin extends Employee {
  constructor(name, position, username, password) {
    super(name, position, username, password)
  }
}

module.exports = Admin
