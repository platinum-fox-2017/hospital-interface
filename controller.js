
let Model = require('./model.js')
let View = require('./view.js')
let argv = require('./index.js')

class Controller {
  constructor() {

  }

  static readCommand(argv) {
    let data_process = new Model()
    let view_process = new View()

    let input = argv[2]
    let syntax = argv.slice(3)
    console.log(input, syntax);

    switch(input){
      case 'register':
        data_process.addEmployee(syntax[0], syntax[1], syntax[2], syntax[3], function(employee, parsedData){
          view_process.displayRegisterData(employee, parsedData);
      }); break;
      case 'login':
        data_process.loginEmployee(syntax[0], syntax[1], function(loginStatus, username){
          view_process.displayLoginStatus(loginStatus, username);
      }); break;
      case 'addPatient':
        data_process.doctorAddPatient(syntax[0], syntax[1], syntax.slice(2), function(isValid, name, diagnosis, patientData){
          view_process.displayPatientAdd(isValid, name, diagnosis, patientData);
        });
        break;
      default: console.log('Invalid command');
                        // a
    }
  }

}

module.exports = Controller
