const EmployeeModel = require('../models/employee')
const EmployeeView = require('../views/employee')

class Employee {
    static registerEmployee(name, password, role) {
        EmployeeModel.registerEmployee(name, password, role, function (dataNewEmployee, dataArray) {
            EmployeeView.printRegistered(dataNewEmployee, dataArray)
        })
    }
}

module.exports = Employee