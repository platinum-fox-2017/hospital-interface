let comment = process.argv.splice(2).join(' ').split(' ')

const C_Hospital = require('./controllers/hospital')
const C_Employee = require('./controllers/employee')

if(comment[0]==='register'){
  C_Hospital.registerEmployee(comment[1], comment[2], comment[3])
}else if(comment[0]==='login'){
  C_Employee.login(comment[1], comment[2])
}
