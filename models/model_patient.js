const fs = require('fs')

class Patient {
  constructor(id, name, diagnosis) {
    this.id = id
    this.name = name
    this.diagnosis = diagnosis
  }
  static readFile(file,type,callback){
    fs.readFile(file,type,function(err,datafile){
      if(err){
        console.log(err)
      }else{
        callback(datafile)
      }
    })
  }
  static validateRole(callback){
    let fileLogin = 'sessionlogin.json'
    // let fileEmployee = './employee.json'
    Patient.readFile(fileLogin,'utf8',function(dataFile){
      let dataLogin = JSON.parse(dataFile)
      // console.log(dataLogin[0].position)
      if(dataLogin[0].position === 'dokter'){
        callback(true)
      }else{
        callback(false)
      }
    })


  }
  static addPatient(inputData,callback){
    // console.log(inputData,'-------------')
    // let id = inputData[0]
    let name = inputData[0]
    let diagnosis = inputData.splice(1).join(',')
    // console.log(diagnosis)
    // console.log(id)
    let filePatient = 'patient.json'
    Patient.validateRole(function(checkRole){
      if(checkRole === false){
        callback(false,name)
      }else{
        Patient.readFile(filePatient,'utf8',function(dataPatient){
          let listPatient = JSON.parse(dataPatient)
          let id = listPatient.length+1
          let objPatient = new Patient(id,name,diagnosis)
          listPatient.push(objPatient)
          fs.writeFile(filePatient,JSON.stringify(listPatient),function(err,data){
          })
          callback(true,listPatient)
        })
      }
    })

  }

}
// console.log(Patient.addPatient('1 Daniel batuk flu pilek demam'))
module.exports = Patient