const fs = require('fs')
const ModelsEmployee = require('./models_employee.js')
const ViewEmployee = require('./view_employee.js')

class ControllerEmployee {
  static execute(command, addition, options) {
    switch(command) {
      case 'register' :
      ModelsEmployee.register(addition, options, ViewEmployee.register)
      break;
      case 'login' :
      ModelsEmployee.login(addition, options, ViewEmployee.login, ViewEmployee.hasLoggedIn)
      break;
      case 'addPatient' :
      ModelsEmployee.addPatient(addition, options, ViewEmployee.addPatient)
      break;
      case 'logout' :
      ModelsEmployee.logOut(ViewEmployee.logout)
      default:
      ViewEmployee.listOfCommand()
    }
  }
}

module.exports = ControllerEmployee