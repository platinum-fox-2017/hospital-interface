const Model = require('../model/employee')
const View = require('../view.js')

class Employee {
  constructor() {

  }

  static doSomething(input, username, password, role) {
    if (input === 'register') {
      let register_data = Model.registerData(username, password, role, function(data1, data2) {
        View.showRegister(data1, data2)
      })
    }
    if (input === 'login') {
      let login_data = Model.loginData(username, password, function (data) {
        // console.log(data);
        View.showLogin(data)
      })
    }
  }

}


module.exports = Employee
