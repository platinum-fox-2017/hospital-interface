const Controller_employee = require('./controller_employ')

let input1 = process.argv.splice(2).join(' ').split(' ')//command
// let input2 = process.argv[3]//username
// let input3 = process.argv[4]//password
// let input4 = process.argv[5]//position
// console.log(input1)
Controller_employee.command(input1[0],input1[1],input1[2],input1[3])