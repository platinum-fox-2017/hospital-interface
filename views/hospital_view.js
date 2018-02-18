"uses strict"
const Table = require('cli-table')
const Chalk = require('chalk')

module.exports = class ViewHospital {
  static showHelp(){
    var t = new Table({
      head : ['No.','Function List','Usage' ]
    });

    t.push(
      ["1.","node index.js help","help"],
      ['2.','node index.js login','login, admin :can add employee, doctor:can add patient with its diagnosis'],
      ['3.','node index.js register(admin)','add employee(format: username,password,role)'],
      ['4.','node index.js addPatient(doctor)','add patient(format: id,name,diagnosis)'],
      ['5.','node index.js logout','logout from the system']
    )

    console.log("" + t);
  }

  static showList(list) {
    console.log(list);
  }

  static showMessage(msg, status = '') {
    let text = msg || ''

    if (status == 'success') {
      text = Chalk.green(`${msg}`)
    } else if (status == 'error') {
      text = Chalk.red(`${msg}`)
    }

    console.log(text);
  }
}
