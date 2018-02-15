const Controller = require('./controllers/controller')

let comment = process.argv.splice(2).join(' ').split(' ')

if(comment[0]==='register'){
  Controller.registerEmployee(comment[1], comment[2], comment[3])
}else if(comment[0]==='login'){
  Controller.login(comment[1], comment[2])
}else if(comment[0]==='addPatient'){
  Controller.addPatient(comment[1], comment.slice(2))
}
