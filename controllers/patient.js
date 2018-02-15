const PatientModel = require('../models/patient')
const PatientView = require('../views/patient')

class Patient {
    static addPatient(id, name, sick) {
        // console.log(id)
        // console.log(name)
        // console.log(sick)
        PatientModel.addPatient(id, name, sick, function (dataArray) {
            PatientView.printedPatient(dataArray)
        })


    }
}

module.exports = Patient