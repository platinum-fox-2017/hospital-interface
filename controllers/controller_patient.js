const Model_patient = require('../models/model_patient')
const View_patient = require('../views/view_patient')

class Controller_patient{
  constructor(){

  }
  static command(command,input){
    if(command === 'addPatient'){
      Model_patient.addPatient(input,function(hasilChek,arrpatient){
        View_patient.showAddPatient(hasilChek,arrpatient)
      })
    }

  }
}

module.exports = Controller_patient