const fs = require('fs');
const Employee = require('./Employee')
const Patient = require('./Patient')

class Hospital {
    constructor(name, location) {
      this.name = name;
      this.employees = [];
      this.patients = [];
      this.location = location;
    }

    readFile(){
      fs.readFile('./employee.json', 'UTF-8', (err, data) => {
        if (err) throw err;
        let parsedData = JSON.parse(data);
        this.employees.push(parsedData.employees);
      });
    }

    writeFileEmployee(newFile){
      fs.writeFile('./employee.json', newFile, (err) => {
          if (err) throw err;
          
      });
    }

    writeFilePatient(newFile){
      fs.writeFile('./patient.json', newFile, (err) => {
          if (err) throw err;
          
      });
    }

    employeeRegister(name, password, role, callbackWrite, callbackView){
      fs.readFile('./employee.json', 'UTF-8', (err, data) => {
        if (err) throw err;
        let parsedData = JSON.parse(data);
        let statusMessage = '';

        let employee = new Employee(name, role, name, password);
        this.employees.push(employee);
        statusMessage = `Save data success {"username":"${employee.username}","password":"${employee.password}","role":"${employee.position}"}. Total employee ${parsedData.length+1}`;

        parsedData.push(employee);

        callbackWrite(JSON.stringify(parsedData));
        callbackView(statusMessage);
      });
    }

    employeeLogin(username, password, callbackWrite, callbackView){
      fs.readFile('./employee.json', 'UTF-8', (err, data) => {
        if (err) throw err;
        let parsedData = JSON.parse(data);
        let statusMessage = ''
        for(let i=0; i<parsedData.length; i++){
          if(parsedData[i].username == username){
            if(parsedData[i].password == password){
              for(let j=0; j<parsedData.length; j++){
                parsedData[j].isLoggedIn = false;
              }
              parsedData[i].isLoggedIn = true;
              statusMessage = `user ${parsedData[i].name} logged in successfully`;
              break;
            }
          }
        }
        if(statusMessage == ''){
          statusMessage = `username / password wrong`;
        }
        callbackWrite(JSON.stringify(parsedData))
        callbackView(statusMessage)
      });
    }

    addPatient(id, nama, diagnosis, callbackWrite, callbackView){
      fs.readFile('./employee.json', 'UTF-8', (err, data) => {
        if (err) throw err;
        let parsedData = JSON.parse(data);
        let statusMessage = '';

        for(let i=0; i<parsedData.length; i++){
          if(parsedData[i].isLoggedIn){
            if(parsedData[i].position.toLowerCase() == 'dokter'){
            
              fs.readFile('./patient.json', 'UTF-8', (err, data) => {
                if (err) throw err;
                let parsedData = JSON.parse(data);
                let statusMessage = '';
                let patient = new Patient(id, nama, diagnosis);              
                
                statusMessage = `Data pasien berhasil ditambahkan. Total data pasien : ${parsedData.length+1}`;
                parsedData.push(patient);
                callbackWrite(JSON.stringify(parsedData));
                callbackView(statusMessage);
              });
            }
            let statusMessage = 'Tidak memiliki akses untuk add patient';
            callbackView(statusMessage);
          }
        }
      });
    }
    
}

module.exports = Hospital;