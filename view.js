"use strict"

class ViewPatient{
  constructor(){

  }

}

class ViewEmployee{
    constructor(){}

    static showTotal(total){
        if(total === false){
            console.log("Username sudah ada")
        }else{
            console.log('Total employee: '+total)
        }
    }

    static statusLogin(respons,status){
        if (status === true){
            console.log('Login Sukses')
        }else{
            console.log(respons)
        }
    }

}


module.exports = {
  ViewPatient,
  ViewEmployee
}
