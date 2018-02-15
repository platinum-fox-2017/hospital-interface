const fs = require('fs');
const Employee = require('./Employee')

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

        let dataToWrite = {
          employees: this.employees,
          patients: this.patients
        }
        parsedData.push(dataToWrite);

        callbackWrite(JSON.stringify(parsedData));
        callbackView(statusMessage);
      });
    }

    writeFile(newFile){
      fs.writeFile('./employee.json', newFile, (err) => {
          if (err) throw err;
          
        });
  }
}

module.exports = Hospital;