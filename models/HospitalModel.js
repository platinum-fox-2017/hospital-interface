const Employee = require('./EmployeeModel.js');
const HospitalView = require('../views/HospitalView.js');
const fs = require('fs');
const Patient = require('./PatientModel.js');
const PatientView = require('../views/PatientView.js');

class Hospital {

  constructor(name, location, employees, patients) {
    this.name = name
    this.employees = employees
    this.patients = patients
    this.location = location
  }
  static addPatient(newPatient){
    //validasi
    var userLoggedIn = Employee.getUserLoggedIn();
    if(userLoggedIn.position != 'dokter'){
      HospitalView.mustDoctor();
    } else {
      Hospital.savePatientToJson(newPatient,PatientView.alertAddPatient);
    }
  }
  static savePatientToJson(patient,callback){
    var name = patient[0];
    var diagnosis = [];
    for(var i = 1; i < patient.length; i++ ){
      diagnosis.push(patient[i]);
    }
    
    fs.readFile('patients.json',(err,data)=>{
      data = JSON.parse(data);
      if(data.length > 0){
        var lastId = data[data.length - 1].id + 1;
      } else {
        var lastId = 1;
      }
      var patient = new Patient(lastId,name,diagnosis)
      data.push(patient)
      callback(data.length);
      data = JSON.stringify(data);
      fs.writeFile('patients.json',data,(err)=>{

          });
        });
  }
}
module.exports = Hospital;



