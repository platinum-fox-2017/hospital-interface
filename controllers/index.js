const ModEmployee = require('../models/employee.js')
const ViewEmployee = require('../views/employee.js')

class Controllers {
  constructor() {

  }
  static input(task1, task2, task3, task4){
    if(task1 === 'register'){
      ModEmployee.register(task2, task3, task4, function(dataObj, dataArr){
        ViewEmployee.register(dataObj, dataArr)
      })
    }
  }
}

module.exports = Controllers
