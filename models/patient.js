const fs = require('fs')

class Patient {
    constructor(id, name, diagnosis) {
        this.id = id
        this.name = name
        this.diagnosis = diagnosis
    }

    static getData(callback) {
        fs.readFile('patient.json', 'UTF-8', (err, data) => {
            callback(JSON.parse(data))
        });
    }

    static addPatientFunc(patient, callback) {
        fs.readFile('session.json', 'UTF-8', (err, data) => {
            let sessionData = JSON.parse(data)
            if (sessionData[0].position === 'dokter') {
                Patient.getData(readFile => {
                    let dataObj = new Patient(readFile.length + 1, patient[1], [patient[2], patient[3], patient[4], patient[5]])
                    // console.log(typeof sessionData)
                    readFile.push(dataObj)
                    fs.writeFile('patient.json', JSON.stringify(readFile), err => {
                        if (err) throw err
                        callback(true, readFile.length)
                    })
                })
            } else {
                callback(false)
            }
        })
    }
}

module.exports = Patient