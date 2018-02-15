class ViewHospital{
  constructor(){

  }

}

class ViewPatient{
  constructor(){

  }

  static addpasien(datapasien,succes){
    if (succes) {
      console.log('data pasien berhasil ditambahkan. total data pasien '+datapasien);
    }
    else{
      console.log('tidak memiliki akses untuk add patient');
    }

  }
}

class ViewEmployee{
  constructor(){

  }

  static logout(){
    console.log('anda telah logout');
  }
  static register(dataparsing,datalength){
    console.log('save data succes'+dataparsing+'Total employee : '+datalength);
  }

  static login(username){
    if (username === '') {
      console.log('username / password salah');
    }
    else{
      console.log('user '+username+' loged in successfully');
    }
  }

}

module.exports={
  Hospital:ViewHospital,
  Patient : ViewPatient,
  Employ : ViewEmployee
}
