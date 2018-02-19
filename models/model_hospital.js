const ModelEmployee = require('./model_employee');
const ModelPatient = require('./model_patient');
const fs = require('fs');

class ModelHospital {
    constructor(name, location, employees, patients) {
        this.name = name
        this.employees = employees
        this.patients = patients
        this.location = location
    }

    static readData(file, cb) {
        fs.readFile(file, (err, data) => {
            if (err) throw err;
            cb(JSON.parse(data))
        });
    }

    static saveData(file, data) {
        fs.writeFile(file, JSON.stringify(data, null, 4), (err) => {
            if (err) throw err;
        });
    }

    static register(dataRegister, cb) {
        let employeeFile = './data/employee.json'
        ModelHospital.readData(employeeFile, (dataEmployees) => {
            let newEmployee = new ModelEmployee(dataRegister[0], dataRegister[1], dataRegister[2])
            dataEmployees.push(newEmployee)
            ModelHospital.saveData(employeeFile, dataEmployees)
            cb(dataEmployees)
        })
    }

    static logIn(dataLogIn, cb) {
        let employeeFile = './data/employee.json'
        let sessionFile = './data/session.json'
        ModelHospital.readData(employeeFile, (dataEmployees) => {
            let employee = [dataEmployees.find(employee => {
                return employee.username == dataLogIn[0] && employee.password == dataLogIn[1]
            })]

            ModelHospital.saveData(sessionFile, employee)
            cb(employee[0])
        })
    }

    static addPatient(dataPatient, cb) {
        let patientFile = './data/patient.json'
        let name = dataPatient[0]
        let diagnosis = dataPatient.splice(1, dataPatient.length - 1)

        ModelHospital.readData(patientFile, (dataPatients) => {
            let newPatientId = Number(dataPatients[dataPatients.length - 1].id) + 1
            let newPatient = new ModelPatient(newPatientId, name, diagnosis)
            dataPatients.push(newPatient)
            ModelHospital.saveData(patientFile, dataPatients)
            cb(dataPatients)
        })
    }

    static roleValidation(cb) {
        let sessionFile = './data/session.json'
        ModelHospital.readData(sessionFile, (lastLogIn) => {
            let isValid = false
            if (lastLogIn.length > 0 && lastLogIn[0].role == 'dokter') {
                isValid = true
            }
            cb(isValid)
        })
    }

    static logOut() {
        let patientFile = './data/patient.json'
        ModelHospital.saveData(sessionFile, [])
    }

}


module.exports = ModelHospital;