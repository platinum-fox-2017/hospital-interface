"uses strict"
const ModelHospital = require('../models/hospital_model')
const ViewHospital  = require('../views/hospital_view')
const Chalk = require ('chalk')

module.exports = class Controller {
  static listMenu(menu) {
    switch (menu[0]) {
      case undefined:

      case 'login':
          ModelHospital.login(menu, function (data) {
            if (data != undefined) {
              ViewHospital.showMessage(Chalk.blue(`User ${data.username} logged in successfully`))
            } else {
              ViewHospital.showMessage(Chalk.red('Invalid username or password !!'))
            }
          })
        break;
      case 'logout':
          ModelHospital.logout()
          ViewHospital.showMessage(Chalk.red(`Logout successfully`))
        break;
      case 'register':
          ModelHospital.inputDataEmployee(menu, function (data, err) {
            if (!err) {
              ViewHospital.showMessage(Chalk.magenta(`Save data success, username: ${JSON.stringify(data[data.length-1].username)}, password :${JSON.stringify(data[data.length-1].password)}, role :${JSON.stringify(data[data.length-1].role)} . Total employee : ${data.length}`, 'success'))
            } else {
              ViewHospital.showMessage(err, 'error')
            }
          })
        break;
      case 'addPatient':
          ModelHospital.inputDataPatient(menu,function (data, err) {
            if (!err) {
              ViewHospital.showMessage(Chalk.magenta(`Save data success ${JSON.stringify(data[data.length-1])}. Total patients : ${data.length}`, 'success'))
            } else {
              ViewHospital.showMessage(err, 'error')
            }
          })
        break;
      case 'help':
        ViewHospital.showHelp()
      default:

    }
  }
}
