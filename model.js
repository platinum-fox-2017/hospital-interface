
let Doctor = require('./doctor.js')
let Receptionist = require('./receptionist.js')
let OfficeBoy = require('./office_boy.js')
let Admin = require('./admin.js')
let Patient = require('./patient.js')
let fs = require('fs');


class Model {
  constructor() {

  }

  readDataJSON(callback){
    fs.readFile('./employeeData.json', 'utf8', function(err,data){
      if(err){
        console.log(err);
      } else {
        callback(null, data)
      }
    });
  }

  readPatientJSON(callback){
    fs.readFile('./patientData.json', 'utf8', function(err,data){
      if(err){
        console.log(err);
      } else {
        callback(null, data)
      }
    });
  }

  addEmployee(name, position, username, password, callback){
    let employee;
    switch (position) {
      case 'doctor':
        employee = new Doctor(name, position, username, password);
        break;
      case 'admin':
        employee = new Admin(name, position, username, password);
        break;
      case 'receptionist':
        employee = new Receptionist(name, position, username, password);
        break;
      case 'office_boy':
        employee = new OfficeBoy(name, position, username, password);
        break;
      default: console.log('error command');
    }

    this.readDataJSON(function(err, data){
      let parsedData = JSON.parse(data);
      parsedData.push(employee);
      let jsonData = JSON.stringify(parsedData);

      fs.writeFile('./employeeData.json', jsonData, 'utf8', function(err){
        if(err){
          console.log(err);
        } else {
          callback(employee, parsedData)
        }
      });
    });
  }

  loginEmployee(username, password, callback){

    this.readDataJSON(function(err, data){
      let parsedData = JSON.parse(data);
      let loginStatus = false
      for (var i = 0; i < parsedData.length; i++) {
        if (username === parsedData[i].username) {
          if (password === parsedData[i].password) {
            if (parsedData[i].isLogIn = true) {
              loginStatus = 'already logged in'
              i = parsedData.length
              return callback(loginStatus, username)
            } else {
              parsedData[i].isLogIn = true;
              loginStatus = true;
              i = parsedData.length
            }
          }
        }
      }

      let jsonData = JSON.stringify(parsedData)
      fs.writeFile('./employeeData.json', jsonData, 'utf8', function(err){
        if(err){
          console.log(err);
        } else {
          callback(loginStatus, username)
        }
      });

    });
  }

  doctorAddPatient(id, name, diagnosis, callback) {
    this.readDataJSON(function(err, data){
      let parsedData = JSON.parse(data);
      let isValid = false
      for (var i = 0; i < parsedData.length; i++) {
        if (parsedData[i].position === 'doctor') {
          if (parsedData[i].isLogIn === true) {
            isValid = true
            i = parsedData.length
          }
        }
      }
      if (isValid === true) {
        fs.readFile('./patientData.json', 'utf8', function(err,data2){
          if(err){
            console.log(err);
          } else {
            let patientData = JSON.parse(data2);
            let patient = new Patient(id, name, diagnosis);
            patientData.push(patient);
            let patientJsonData = JSON.stringify(patientData);

            fs.writeFile('./patientData.json', patientJsonData, 'utf8', function(err){
              if(err){
                console.log(err);
              } else {
                callback(isValid, name, diagnosis, patientData)
              }
            });
          }
        });
      } else {
        // not valid to access patients!
        return callback(isValid, name, diagnosis)
      }
    });
  }

}

module.exports = Model
