const PatientController = require('../controllers/patient')

class Patient {
    constructor(command, patientId, patientName, patientSick) {
        this.command = command
        this.patientId = patientId
        this.patientName = patientName
        this.patientSick = patientSick
    }

    start() {
        if (this.command === 'addPatient') {
            PatientController.addPatient(this.patientId, this.patientName, this.patientSick)
        }
    }
}

module.exports = Patient