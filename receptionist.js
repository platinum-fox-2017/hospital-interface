let Employee = require('./employee.js')

class Receptionist extends Employee {
  constructor(name, position, username, password) {
    super(name, position, username, password)
  }
}

module.exports = Receptionist
