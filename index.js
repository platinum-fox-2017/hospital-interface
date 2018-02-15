"use strict"
const EmployeeControl = require('./controller/employeeController.js')


let command = process.argv[2]
let option = process.argv.slice(3)


EmployeeControl.readCommand(command, option);