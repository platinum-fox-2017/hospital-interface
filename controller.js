"use strict"
const fileModel = require('./model.js')
var newPatient = fileModel.Patient
var newEmployee = fileModel.Employee
const fileView = require('./view.js')
var newViewPatient = fileView.ViewPatient
var newViewEmployee = fileView.ViewEmployee

class Controller{
  constructor(){

  }

  static register(data){
    newEmployee.register(data, (getTotalEmployee)=>{
      newViewEmployee.showTotal(getTotalEmployee)
    })
  }

  static login(data){
    newEmployee.login(data,(respons,status)=>{
      newViewEmployee.statusLogin(respons,status)
    })
  }

}

module.exports = Controller
