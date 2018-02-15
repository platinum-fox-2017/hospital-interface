const Controller = require('./controller_employ')
class View {
  constructor(){

  }
  static showRegister(dataAll,objEmploy){
    console.log(`Save data success (${JSON.stringify(objEmploy)}) .Total employee : ${dataAll.length}`)
  }
}

module.exports = View