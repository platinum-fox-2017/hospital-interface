const EmployeeRoutes = require('./routes/employee')
const command = process.argv[2]
const name = process.argv[3]
const password = process.argv[4]
const role = process.argv[5]

let newEmployee = new EmployeeRoutes(command, name, password, role)
newEmployee.registerEmployee()
