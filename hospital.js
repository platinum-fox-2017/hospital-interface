let comment = process.argv.splice(2).join(' ').split(' ')

const C_Hospital = require('./controllers/hospital')

if(comment[0]==='register'){
  C_Hospital.registerEmployee(comment[1], comment[2], comment[3])
}
