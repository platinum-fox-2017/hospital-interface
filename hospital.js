const Controller_employee = require('./controller_employ')
const Controller_Patient = require('./controller_patient')

let input1 = process.argv[2]//command
let input2 = process.argv.splice(3).join(' ').split(' ')
// let input2 = process.argv[3]//username
// let input3 = process.argv[4]//password
// let input4 = process.argv[5]//position
// console.log(input1)
// console.log(input2)
if(input1 !== 'addPatient'){
  Controller_employee.command(input1,input2[0],input2[1],input2[2])
}else{
  Controller_Patient.command(input1,input2)
}


