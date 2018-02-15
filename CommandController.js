const Employee = require('./models/EmployeeModel.js');
const EmployeeView = require('./views/EmployeeView.js');

class Command {
  constructor(command,flag) {
    this.command = command;
    this.flag = flag;
  }
  runCommand(){
    if(this.command === 'register'){
      let newEmployee = new Employee(this.flag[0],this.flag[1],this.flag[2]);
      newEmployee.register(EmployeeView.showSuccessRegister);
    }
  }
}
module.exports = Command;

