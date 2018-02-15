const Controller = require('./controller');

let myArgv = process.argv

let controller = new Controller();

if (myArgv[2] == 'addPatient') {
    var arrIllness = []
    for(let i = 4; i < myArgv.length; i++) {
        arrIllness.push(myArgv[i]);
    }    
    controller.start(myArgv[2],myArgv[3], arrIllness);
} else {
    controller.start(myArgv[2],myArgv[3],myArgv[4]);
}


