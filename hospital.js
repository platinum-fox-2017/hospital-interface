"use strict"

class Hospital {
  constructor(name, location, employees, patients) {
    this.name = name
    this.employees = employees
    this.patients = patients
    this.location = location
  }
}

class Patient {
  constructor(id, name, diagnosis) {
    this.id = id
    this.name = name
    this.diagnosis = diagnosis
  }
}

class Employee {
  constructor(name, position, username, password) {
    this.name = name
    this.position = this.positionGenerator(position)
    this.username = username
    this.password = password
  }

  positionGenerator(position) {
    position = position.toLowerCase();
    let pos = ['admin','office boy', 'receptionist', 'dokter'];
    if(pos.includes(position)) return position;
    else return 'office boy'
  }
}


// var kacung = new Employee('ervan', 'doKter', 'aasdf', 'asdv')
// console.log(kacung)
