"uses strict"
const fs            = require('fs');
const ModelEmployee = require('../models/employee_model')
const ModelPatient  = require('../models/patient_model')
const fileEmployee  = './employee.json'
const filePatient   = './patient.json'

module.exports = class ModelHospital {
  constructor(name, location, employees, patients) {
    this.name       = name
    this.employees  = []
    this.patients   = []
    this.location   = location
  }

  static read(file, callback) {
    fs.readFile(file, 'utf-8', (err, data) => {
      callback(JSON.parse(data))
    })
  }

  static write(file, data, callback) {
    fs.writeFile(file, JSON.stringify(data), (err) => {
      callback(err)
    })
  }

  static readSession(callback) {
    fs.readFile('./session.json', 'utf-8', (err, data) => {
      callback(JSON.parse(data))
    })
  }

  static writeSession(isLogin, role = '') {
    let arrSession = []
    if (isLogin) {
      arrSession = [{
        role : role,
      }]
    }
    fs.writeFile('./session.json', JSON.stringify(arrSession), (err) => {
      if (err) throw err
    })
  }

  static login(input, callback) {
    ModelHospital.logout()
    ModelHospital.read(fileEmployee, (dataEmployee) => {
      let data = dataEmployee.find(employee => employee.username == input[1] && employee.password == input[2])
      if (data != undefined) {
        ModelHospital.writeSession(true, data.role)
      }
      callback(data)
    })
  }

  // fitur logout
  static logout() {
    ModelHospital.writeSession(false)
  }

  static inputDataEmployee(input, callback) {
    ModelHospital.readSession((data) => {
      if (data[0].role == 'admin') {
        ModelHospital.read(fileEmployee, (dataEmployee) => {
          let employee = new ModelEmployee(input[1], input[2], input[3])
          dataEmployee.push(employee)
          ModelHospital.write(fileEmployee, dataEmployee, (err) => {
            callback(dataEmployee, err)
          })
        })
      } else {
        callback(null, 'you are not admin')
      }
    })
  }

  static inputDataPatient(input, callback) {
    ModelHospital.readSession((data) => {
      if (data[0].role == 'dokter') {
        ModelHospital.read(filePatient, (dataPatient) => {
          let id        = 1
          let diagnosis = []

          // make auto increment on id patient
          if (dataPatient.length > 0) {
            id = dataPatient[dataPatient.length-1].id + 1
          }

          for (let i = 2; i < input.length; i++) {
            diagnosis.push(input[i])
          }

          let patient = new ModelPatient(id, input[1], diagnosis)
          dataPatient.push(patient)
          ModelHospital.write(filePatient, dataPatient, (err) => {
            callback(dataPatient, err)
          })
        })
      } else {
        callback(null, 'you are not doctor')
      }
    })
  }
}
