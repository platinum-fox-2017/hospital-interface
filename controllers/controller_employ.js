const Model_employee = require('../models/model_employee')
const Model_hospital = require('../models/model_hospital')
const View_employee = require('../views/view_employee')

class Controller_employee{
  constructor(){

  }
  static command(command,user,pass,role){
    if(command === 'register'){
      Model_employee.registerEmploy(user,pass,role,function(dataAll, objEmploy){
        View_employee.showRegister(dataAll,objEmploy)
      })
    }
    else if(command === 'login'){
      Model_employee.loginEmploy(user,pass,function(hasilChek,arruser){
        View_employee.showLogin(hasilChek,arruser)
      })
    }
    else if(command === 'logout'){
      Model_employee.logoutEmploy(function(log){
        View_employee.showLogout(log)
      })
    }

  }
}

module.exports = Controller_employee