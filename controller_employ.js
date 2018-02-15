const Model_employee = require('./model_employee')
const Model_hospital = require('./model_hospital')
const Model_patient = require('./model_patient')
const View_employee = require('./view_employee')

class Controller{
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

  }
}

module.exports = Controller