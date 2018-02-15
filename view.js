
// let Model = require('./model.js')
// let View = require('./view.js')

class View {
  constructor() {

  }

  displayRegisterData(employee, parsedData){
    console.log(`> Save data success name: ${employee.name}, username: ${employee.username}, position: ${employee.position}. Total employee : ${parsedData.length}`);
  }

  displayLoginStatus(loginStatus, username) {
    if (loginStatus === false) {
      console.log('> username / password invalid');
    } else if (loginStatus === true) {
      console.log(`> user ${username} logged in succesfully`);
    } else if (loginStatus === 'already logged in') {
      console.log(`> user ${username} is already logged in`);
    }
  }

  displayPatientAdd(isValid, name, diagnosis, patientData) {
    if (isValid === false) {
      console.log(`> user does not have access to add patient`);
    } else if (isValid === true) {
      console.log(`> Patient adata succesfully added. Total patient data : ${patientData.length}`);
    }
  }

}

module.exports = View
