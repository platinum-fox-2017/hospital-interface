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
  }

}


module.exports = Employee
