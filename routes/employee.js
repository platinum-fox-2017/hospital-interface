const EmployeeController = require('../controllers/employee')
const PatientController = require('../controllers/patient')

class Employee {
    constructor(command, name, password, role) {
        this.command = command
        this.name = name
        this.password = password
        this.role = role
    }

    start() {
        if (this.command === 'register') {
            EmployeeController.registerEmployee(this.name, this.password, this.role)
        } else if (this.command === 'login') {
            EmployeeController.loginEmployee(this.name, this.password)
        }
    }
}

module.exports = Employee