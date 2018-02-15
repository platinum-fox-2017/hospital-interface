var patient = require('./patient.js');
var employee = require('./employee.js');
var registerview = require('./registerview.js');
var loginview = require('./loginview.js');
var addpatientview = require('./addpatientview.js');

var argv = process.argv;
if(argv[2]==='register'){
  employee.modelRegister(registerview.viewRegister);
} else if(argv[2]==='login'){
  employee.modelLogin(loginview.viewLogin);
} else if(argv[2]==='addPatient'){
  patient.modelAddPatient(addpatientview.viewAddPatient);
} else {
  console.log('Wrong Command!');
}
