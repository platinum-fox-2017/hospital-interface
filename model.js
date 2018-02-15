var employee = require('./pekerja.js');
var view = require('./view.js');
var pasien = require('./pasien.js')
const fs = require('fs');
var argv = process.argv;
let status = true;

class ToDoModel {
  static modelRegister(callback){
    fs.readFile('./employee.json', 'utf8', function(err, data){
      let employeeList = JSON.parse(data);
      let inputEmployee = new employee(argv[3],argv[4],argv[5]);
      employeeList.push(inputEmployee);
      let newFormat = JSON.stringify(employeeList);
      fs.writeFile('./employee.json', newFormat, 'UTF-8', function(err){
        if (err) throw err;
        callback(`{"username":"${argv[3]}","password":"${argv[4]}","role":"${argv[5]}"}`,employeeList.length);
      });
    });
  }

  static modelLogin(callback){
    fs.readFile('./employee.json', 'utf8', function(err, data){
      let employeeList = JSON.parse(data);
      let count = 0;
      for(let i=0; i<employeeList.length; i++){
        if(employeeList[i].username===argv[3] && employeeList[i].password===argv[4]){
          count++;
          const pekerjaan = argv[5];
        }
      }
      if(count===1){
        status = true;
        callback(status,argv[3]);
      } else {
        callback(status,argv[3]);
      }
    });
  }

  static modelAddPatient(callback){
    fs.readFile('./patient.json', 'utf8', function(err, data){
      let patientList = JSON.parse(data);
      let status = false;
      if(pekerjaan!=='Dokter'){
        callback(status,patientList.length);
      } else {
        status = true;
        let inputPatient = new pasien(argv[3],argv[4],argv[5]);
        patientList.push(inputPatient);
        let newFormat = JSON.stringify(patientList);
        fs.writeFile('./patient.json', newFormat, 'UTF-8', function(err){
          if (err) throw err;
          callback(status,patientList.length);
        });
      }
    });
  }
}

module.exports = ToDoModel;
