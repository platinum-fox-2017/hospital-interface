"use strict"
const Controller = require('./controller.js')

class Hospital{
    constructor(){

    }

   static register(data){
      Controller.register(data)
    }

   static login(data){
      Controller.login(data)
    }

}

var argv = process.argv.slice(2,process.argv.length)
var data = argv.slice(1,argv.length)

if(argv[0]==='register'){
  Hospital.register(data)
}
else if(argv[0]==='login'){
  Hospital.login(data)
}
