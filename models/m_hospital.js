const fs = require('fs')
const M_Patient = require('../models/m_patient')
const fileEmployee = './employee.json'
const filePatient = './patient.json'
const fileAuth = './session.json'

class M_Hospital {
    constructor(name, location) {
      this.name = name || 'RS Pondok Indah'
      this.employees = []
      this.patients = []
      this.location = location || 'Jakarta Selatan'
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
    static auth(callback){
        M_Hospital.read(fileAuth, dataAuth=>{
            if(dataAuth.length === 0){
                callback(false)
            }else if(dataAuth[0].role === 'dokter'){
                callback(true)
            }else{
                callback(false)
            }
        })
    }
    static registerEmployee(newEmployee, callback){
        M_Hospital.read(fileEmployee, dataEmployee=>{   
            dataEmployee.push(newEmployee)
            M_Hospital.write(fileEmployee, dataEmployee, err=>{
                callback(JSON.stringify(newEmployee), dataEmployee.length)
            }) 
        })
    }
    static addPatient(nama, diagnosis, callback){
        M_Hospital.auth(role=>{
            if(role === false){
                callback(false, '')
            }else{
                M_Hospital.read(filePatient, dataPatient=>{ 
                    let id= dataPatient.length+1 
                    let newPatient = new M_Patient(id, nama, diagnosis)
                    dataPatient.push(newPatient)
                    M_Hospital.write(filePatient, dataPatient, err=>{
                        callback(true, dataPatient.length)
                    })
                })
            }
        })
    }
}

module.exports = M_Hospital