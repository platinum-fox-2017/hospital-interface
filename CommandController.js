const Employee = require('./models/EmployeeModel.js');
const EmployeeView = require('./views/EmployeeView.js');
const Hospital = require('./models/HospitalModel.js');

class Command {
  constructor(command,flag) {
    this.command = command;
    this.flag = flag;
  }

  runCommand(){
    if(this.command === 'register'){
      let newEmployee = new Employee(this.flag[0],this.flag[1],this.flag[2]);
      newEmployee.register(EmployeeView.showSuccessRegister);
    } else if(this.command === 'login'){
      let employee = new Employee(this.flag[0],this.flag[1]);
      employee.login(EmployeeView.showAlertLogin);
    } else if(this.command === 'addPatient'){
      Hospital.addPatient(this.flag);
    } else if(this.command === 'logout'){
      let employee = new Employee(this.flag[0]);
      employee.logout(EmployeeView.showAlertLogout);
    }
  }
}
module.exports = Command;

