const ControllerEmployee = require('./controller_employee.js')

let argv = process.argv
let command = argv[2]
let addition = argv[3]
let options = []
let index = 4
while(argv[index] !== undefined) {
  options.push(argv[index])
  index++
}

ControllerEmployee.execute(command, addition, options)