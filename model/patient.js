const fs = require('fs')
const Patient = require('../class/patient.js')

class PatientModel {
    static addPatient(id, name, diagnosis, callback1, callback2){
        fs.readFile('data/employee.json', 'utf8', (err, data) => {
            if (err) throw err
            else {
                let database = JSON.parse(data)
                let diagnose = diagnosis.join(' ')
                
                fs.readFile('data/patient.json', 'utf8', (err1, data1) => {
                    if (err1) throw err1
                    else {
                        let dataPatient = JSON.parse(data1)
                        let patient = new Patient(id, name, diagnose)
                        dataPatient.push(patient)
                        for (let i = 0; i < database.length; i++){
                            if (database[i].login === true){
                                if (database[i].role === 'dokter'){
                                    fs.writeFile('data/patient.json', JSON.stringify(dataPatient), 'utf8', (err2, data2) =>{
                                        if (err2) throw err2
                                        else {
                                            callback1(dataPatient.length)
                                        }
                                    })
                                } else {
                                    callback2()
                                }
                            }
                        }

                    }
                })
            }
        })
    }
}




module.exports = PatientModel