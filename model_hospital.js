const Employee = require('./model_employee')
const Patient = require('./model_patient')

class Hospital {
  constructor(name, location) {
    this.name = name
    this.employees = []
    this.patients = []
    this.location = location
  }
  
}

module.exports = Hospital