const EmployeeModel = require('../model/employee.js')
const EmployeeView = require('../view/employee.js')

class EmployeeController {
    static register(name, password, position){
        EmployeeModel.register(name, password, position, EmployeeView.register)
    }
    static login(username, password){
        EmployeeModel.login(username, password, EmployeeView.loginSuccess, EmployeeView.loginFail)
    }
    static logout(){
        EmployeeModel.logout(EmployeeView.logout)
    }
}

module.exports = EmployeeController