"use strict"

const fs = require('fs')
const controller = require('../controller/controller.js')
const employeeModel = require('./employeeModel.js')

class Patient {
  constructor(obj) {
    this.id = obj.id
    this.name = obj.name
    this.diagnosis = obj.diagnosis
  }

  static bacaFile(callback) {
    fs.readFile('./employee.json', 'utf8', function(err, data){
      if(err) throw err;
      let dataObj = JSON.parse(data);
      callback(dataObj)
    })
  }

  static writeFile(data, callback) {
    fs.writeFile('./patient.json', JSON.stringify(data), (err) =>{
      if (err) throw err;
      callback()
    })
  }

  static addPatient(command, callback) {
    Patient.bacaFile(function(data){
      for(let i=0; i<data.length; data++) {
        if(data[i].role == 'dokter' && data[i].status == true) {
          console.log('masuk');
          let newPatient = {}
          newPatient.id = command[0]
          newPatient.name = command[1]
          newPatient.diagnosis = command.splice(2)

          data.push(new Patient(newPatient))

          Patient.writeFile(data,function(){
            callback(data)
          })
        }
      }
    })
  }
}

module.exports = Patient
