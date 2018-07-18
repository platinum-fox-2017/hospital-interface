"use strict"

const modelEmployee = require('../model/employeeModel.js')
const modelPatient = require('../model/patientModel.js')
const viewEmployee = require('../view/employeeView.js')

class controller {

  static execute(start) {
    let command1 = start[2]
    let command2 = start.splice(3)

    switch(command1) {
      case 'register': this.register(command2[0],command2[1],command2[2]); break;
      case 'login': this.login(command2[0], command2[1]); break;
      case 'addPatient': this.addPatient(command2); break;
      case 'logout': this.logout(command2); break;
      default: this.help()
    }

  }

  static register(username, password, role) {
    modelEmployee.register(username, password, role, function(data) {
      viewEmployee.saveDataEmployee(data);
    })
  }

  static login(username, password) {
    modelEmployee.login(username, password, function(data){
      viewEmployee.login(username, data);
    })
  }

  static logout(username) {
    modelEmployee.logout(username, function(data){
      viewEmployee.logout(data);
    })
  }

  static addPatient(command) {
    modelEmployee.checkLogin("dokter", true, function(data){
      if(data == true) {
        modelPatient.addPatient(command, function(data){
          viewEmployee.saveDataPatient(data)
        })
      } else {
        viewEmployee.saveDataPatientGagal()
      }
    })
  }

  static help() {
    viewEmployee.listHelp()
  }

}

module.exports = controller
