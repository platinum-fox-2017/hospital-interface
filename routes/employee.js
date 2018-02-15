const EmployeeController = require('../controllers/employee')
class Employee {
    constructor(command, name, password, role) {
        this.command = command
        this.name = name
        this.password = password
        this.role = role
    }

    registerEmployee() {
        if (this.command === 'register') {
            EmployeeController.registerEmployee(this.name, this.password, this.role )
        }
    }
}

module.exports = Employee