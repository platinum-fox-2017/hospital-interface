const Controller = require('../controllers/controller_employ')
class View_employee {
  constructor(){

  }
  static showRegister(dataAll,objEmploy){
    console.log(`Save data success (${JSON.stringify(objEmploy)}) .Total employee : ${dataAll.length}`)
  }
  static showLogin(hasilChek,arruser){
    if(hasilChek === true){
      // console.log(arruser)
      console.log(`User ${arruser[0].username} logged in succesfully`)
    }else{
      console.log('username/password salah')
    }
  }
  static showLogout(log){
    console.log(log)
  }
}

module.exports = View_employee