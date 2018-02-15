const Employee = require('../models/model_employee')
const Patient = require('../models/model_patient')

class Hospital {
  constructor(name, location) {
    this.name = name
    this.employees = []
    this.patients = []
    this.location = location
  }
  
}

module.exports = Hospital