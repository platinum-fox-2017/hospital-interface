let Employee = require('./employee.js')

class OfficeBoy extends Employee {
  constructor(name, position, username, password) {
    super(name, position, username, password)
  }
}

module.exports = OfficeBoy
