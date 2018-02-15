const fs = require('fs')
const Employee = require('./employee')
const Patient = require('./patient')

class ModelsEmployee {
  static read() {
    let data = JSON.parse(fs.readFileSync('./employee.JSON', 'utf8'))
    return data
  }

  static write(data) {
    fs.writeFileSync('./employee.JSON', JSON.stringify(data), 'utf8')
  }

  static register(addition, details, callback) {
    let data = this.read()
    let role = details.splice(1).join(' ')
    let employee = new Employee(addition, role, addition, details[0])
    data.push(employee)
    let totalEmp = data.length
    this.write(data)
    callback(employee, totalEmp)
  }

  static login(addition, options, callback, callback2) {
    let data = this.read()
    let loggedin = false
    for(let i = 0; i < data.length; i++) {
      if(data[i].hasloggedin) {
        loggedin = true;
        callback2()
        break;
      }
    }

    while(!loggedin) {
      for(let i = 0; i< data.length; i++) {
        if(data[i].username.toLowerCase() == addition && data[i].password == options[0]) {
          loggedin = true
          data[i].hasloggedin = true
          this.write(data)
          callback(addition, loggedin)
          break;
        }
      }
    }
  }

  static dataPatient() {
    let data = JSON.parse(fs.readFileSync('./patient.JSON', 'utf8'))
    return data
  }

  static writePatient(data) {
    fs.writeFileSync('./patient.JSON', JSON.stringify(data), 'utf8')
  }

  static addPatient(addition, options, callback) {
    let employee = this.read()
    let dataPatient = this.dataPatient()
    let doc = false;
    for(let i = 0; i < employee.length; i++) {
      if(employee[i].hasloggedin && employee[i].position === 'dokter') {
        doc = true;
      }
    }

    if(doc) {
      let count = dataPatient.length+1
      let diagnosis = options.splice(1).join(' ')
      let patient = new Patient(count, options[0], diagnosis)
      dataPatient.push(patient)
      this.writePatient(dataPatient)
    }
    let totalPatient = dataPatient.length
    callback(doc, totalPatient)
  }

  static logOut(callback) {
    let data = this.read()
    for(let i = 0; i < data.length; i++) {
      if(data[i].hasloggedin) {
        data[i].hasloggedin = false
        callback()
        this.write(data)
        break;
      }
    }
  }
}

module.exports = ModelsEmployee