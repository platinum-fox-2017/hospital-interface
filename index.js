const Employee1 = require('./controller/employee.js')

const input = process.argv[2]
const username = process.argv[3]
const password = process.argv[4]
const role = process.argv[5]

Employee1.doSomething(input, username, password, role)
