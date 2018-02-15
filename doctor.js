let Employee = require('./employee.js')

class Doctor extends Employee {
  constructor(name, position, username, password) {
    super(name, position, username, password)
  }
}

module.exports = Doctor
