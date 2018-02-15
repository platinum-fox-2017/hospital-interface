const Model_employee = require('./model_employee')
const Model_hospital = require('./model_hospital')
const Model_patient = require('./model_patient')
const View_employee = require('./view_employee')

class Controller{
  constructor(){

  }
  static command(input1,input2,input3,input4){
    if(input1 === 'register'){
      Model_employee.registerEmploy(input2,input3,input4,function(dataAll, objEmploy){
        View_employee.showRegister(dataAll,objEmploy)
      })
    }

  }
}

module.exports = Controller