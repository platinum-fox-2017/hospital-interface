var model = require('./model.js');
var view = require('./view.js');

var argv = process.argv;
if(argv[2]==='register'){
  model.modelRegister(view.viewRegister);
} else if(argv[2]==='login'){
  model.modelLogin(view.viewLogin);
} else if(argv[2]==='addPatient'){
  model.modelAddPatient(view.viewAddPatient);
} else {
  console.log('Wrong Command!');
}
