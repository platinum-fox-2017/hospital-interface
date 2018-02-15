const fs = require('fs')

class Employee {
  constructor() {

  }

  static registerData(username, password, role, cb) {
    fs.readFile('./employee.json', 'utf8', function(err, data) {
      let make_obj = {Username: username, Password: password, Role: role}
      let arr_json = JSON.parse(data)
      arr_json.push(make_obj)
      // console.log(arr_json.length);
      let str_json = JSON.stringify(arr_json)
      fs.writeFile('./employee.json', str_json, 'utf8', function(err, data) {
        cb(make_obj, arr_json)
      })
    })
  }
}

module.exports = Employee
