class ViewEmployee {
  static register(objEmp, total) {
    console.log(`Save data succes ${JSON.stringify(objEmp)}. Total Employee: ${total}`)
  }

  static login(username, loggedin) {
    if (loggedin) {
      console.log(`user ${username} logged in successfully`)
    } else {
      console.log(`username / password wrong`)
    }
  }

  static hasLoggedIn() {
    console.log(`already logged in!`)
  }

  static addPatient(doc, total) {
    if(doc) {
      console.log(`Data pasien berhasil ditambahkan. Total data pasien ${total}`)
    } else {
      console.log(`Tidak memiliki akses untuk add patient`)
    }
  }

  static logout() {
    console.log(`you've succesfully logged out!`)
  }

  static listOfCommand() {
    let command = ['$node index.js', '$node index.js help', '$node index.js register', '$node index.js login <username> <password>', '$node index.js addPatient <id> <nama_pasien> <diagnosis>', '$node index.js logout']
    for(let i = 0; i < command.length; i++) {
      console.log(command[i])
    }
  }
}

module.exports = ViewEmployee