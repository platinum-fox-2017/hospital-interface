const Employee = require('./routes/employee')
const Patient = require('./routes/patient')

const command = process.argv[2]
const name = process.argv[3]
const password = process.argv[4]
const role = process.argv[5]

const patientId = process.argv[3]
const patientName = process.argv[4]
const patientSick = process.argv.splice(5)

let newHospital = new Employee(command, name, password, role)
newHospital.start()


let patient = new Patient(command, patientId, patientName, patientSick)
patient.start()

