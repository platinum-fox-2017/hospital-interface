const fs = require('fs');
var addpatientview = require('./addpatientview.js');
var argv = process.argv;

class Patient {
  constructor(id, name, keluhan) {
    this.id = id
    this.name = name
    this.keluhan = keluhan
  }

  static modelAddPatient(callback){
    fs.readFile('./patient.json', 'utf8', function(err, data){
      let patientList = JSON.parse(data);
      let status = false;
      fs.readFile('./employee.json', 'utf8', function(err, data){
        var employeeList = JSON.parse(data);
        if(employeeList[employeeList.length-1].position!=='Dokter'){
          callback(status,patientList.length);
        } else {
          status = true;
          fs.readFile('./patient.json', 'utf8', function(err, data){
            let patientList = JSON.parse(data);
            let inputPatient = new Patient(patientList.length+1,argv[4],argv[5]);
            patientList.push(inputPatient);
            let newFormat = JSON.stringify(patientList);
            fs.writeFile('./patient.json', newFormat, 'UTF-8', function(err){
              if (err) throw err;
              callback(status,patientList.length);
            });
          });
        }
      });
    });
  }
}

module.exports = Patient;
