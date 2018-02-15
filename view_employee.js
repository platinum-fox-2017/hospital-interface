const Controller = require('./controller_employ')
class View {
  constructor(){

  }
  static showRegister(dataAll,objEmploy){
    console.log(`Save data success (${JSON.stringify(objEmploy)}) .Total employee : ${dataAll.length}`)
  }
  static showLogin(hasilChek,user){
    if(hasilChek === true){
      console.log(user)
      console.log(`User ${user[0]} logged in succesfully`)
    }else{
      console.log('username/password salah')
    }
  }
}

module.exports = View