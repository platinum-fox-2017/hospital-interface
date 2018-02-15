const EmployeeModel = require('../models/employee')
const EmployeeView = require('../views/employee')

class Employee {
    constructor(name, position, username, password) {
        this.name = name
        this.position = position
        this.username = username
        this.password = password
    }
}

module.exports = Employee