"use strict"

const EmployeeModel = require('../models/employee.js');
const EmployeeView = require('../views/employee.js');

class EmployeeControl {
  constructor(name, position, username, password) {
    this.name = name;
    this.position = position;
    this.username = username;
    this.password = password;
  }

  execute(command) {
  	switch (command) {
  		case 'register' : {
  			EmployeeModel.register({name: this.name, position: this.position, username: this.username, password: this.password},function (dataObj) {
  				EmployeeView.showMessage(`> save data success {"username":"${dataObj[dataObj.length-1].name}","password":"${dataObj[dataObj.length-1].password}","position":"${dataObj[dataObj.length-1].position}"}. Total employee : ${dataObj.length}`);
  				// console.log(dataObj);
  			});
  		}
  	}
  }
}

module.exports = EmployeeControl;