const fs = require('fs')

class Patient {
    static addPatient(id, name, sick, callback) {
        fs.readFile('./session.json', 'utf-8', (err, data) => {
            let dataArray = JSON.parse(data)
            if (dataArray.role === 'dokter') {
                fs.readFile('./patient.json', 'utf-8', (err, dataPatients) => {
                    let dataPatient = JSON.parse(dataPatients)
                    let newPatient = {
                        id: id,
                        name: name,
                        diagnosis: sick
                    }

                    dataPatient.push(newPatient)
                    let stringfy = JSON.stringify(dataPatient)

                    fs.writeFile('./patient.json', stringfy, (err, data) => {
                        callback(dataPatient.length)
                    })
                })
            } else {
                callback(null)
            }

        })
    }
}

module.exports = Patient