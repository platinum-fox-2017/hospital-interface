const Hospital = require('./controller/Hospital')
const myArgv = process.argv;

let content = [];
for(let i=3; i<myArgv.length; i++){
    content.push(myArgv[i]);
}

Hospital.run(myArgv[2], content)