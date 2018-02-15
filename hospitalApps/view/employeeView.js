"use strict"

const employeeModel = require('../view/employeeView.js')
const controller = require('../controller/controller.js')

class EmployeeView {

  static saveDataEmployee(data) {
    console.log(`save data success ${JSON.stringify(data[data.length-1])}`)
    console.log(`Total employee : ${data.length}`);
  }

  static login(username, data) {
    if(data == true) {
      console.log(`user ${username} logged in successfully`);
    } else {
      console.log(`username / password wrong`);
    }
  }

  static saveDataPatient(data) {
    console.log(`save data success ${JSON.stringify(data[data.length-1])}`)
    console.log(`Total patient : ${data.length}`);
  }

}

module.exports = EmployeeView
