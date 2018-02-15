"use strict"

const EmployeeModel = require('../models/employee.js');
const EmployeeView = require('../views/employee.js');

class EmployeeControl {

  static register(options) {
    EmployeeModel.register(options, function (dataObj) {
        EmployeeView.showMessage(`> save data success {"username":"${dataObj[dataObj.length-1].name}","password":"${dataObj[dataObj.length-1].password}","position":"${dataObj[dataObj.length-1].position}"}. Total employee : ${dataObj.length}`);
      });
  }

  static login(options) {
    EmployeeModel.login(options, function (flag) {
        if (flag) EmployeeView.showMessage(`> user ${options.username} logged in successfully`);
        else EmployeeView.showMessage(`> username / password wrong`);
      });
  }

  static logout() {
    EmployeeModel.logout(function (username) {
      EmployeeView.showMessage(`> user ${username} logged out successfully`);
    })
  }
}

module.exports = EmployeeControl;