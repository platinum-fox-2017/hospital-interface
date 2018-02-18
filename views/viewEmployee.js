class ViewEmployee{
    static showRegister(dataEmployee,newEmployee){
      console.log(`sava data success ${JSON.stringify(newEmployee)}. Total employee : ${dataEmployee.length}`)
    }

    static showHelp(){
      console.log(`apps ini bisa menggunakan command berikut : `)
      console.log(`$node index.js register <username> <password> <position>`)
      console.log(`<position> = admin , dokter, office boy atau receptionis`)
      console.log(`$node index.js login <username> <password>`)
      console.log(`$node index.js addPatient <idoptional> <nama> <penyakit>`)
    }

    static showLogin(loginStatus,userLogin){
      if(loginStatus === true && userLogin !== undefined){
        console.log(`user ${userLogin} logged in successfully`)
      }else if(loginStatus === true){
        console.log(`maaf anda tidak bisa login untuk saat ini`)
      }else{
        console.log(`username/password wrong`)
      }
    }

    static forbiden(){
      console.log(`anda tidak mempunyai hak akses untuk menambah pasien`)
    }

    static showLogout(username){
      console.log(`akun "${username}" telah berhasil logout`)
    }
}


module.exports = ViewEmployee
