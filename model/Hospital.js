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
        this.employees.push(parsedData.employees);
      });
    }

    writeFile(newFile){
      fs.writeFile('./employee.json', newFile, (err) => {
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

    employeeLogin(username, password, callbackView){
      fs.readFile('./employee.json', 'UTF-8', (err, data) => {
        if (err) throw err;
        let parsedData = JSON.parse(data);
        let statusMessage = ''
        for(let i=0; i<parsedData.length; i++){
          if(parsedData[i].username == username){
            if(parsedData[i].password == password){
              statusMessage = `user ${parsedData[i].name} logged in successfully`;
              break;
            }
          }
        }
        if(statusMessage == ''){
          statusMessage = `username / password wrong`;
        }
        callbackView(statusMessage)
      });
    }
}

module.exports = Hospital;