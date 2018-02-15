const Controller = require('./controller_patient')
class View_patient {
  constructor(){

  }

  static showAddPatient(hasilChek,arrpatient){
    if(hasilChek === true){
      // console.log(arruser)
      console.log(`Data patient berhasil ditambahkan. Total data patient : ${arrpatient.length}`)
    }else{
      console.log('tidak memiliki akses untuk add patient')
    }
  }
}

module.exports = View_patient