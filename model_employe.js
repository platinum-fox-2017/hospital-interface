const fs = require('fs')
let viewEmploye = require('./view_employe.js')

var _argv = process.argv;

class ModuleEmployee {
    constructor(name, position, username, password) {
        this.name = name
        this.position = position
        this.username = username
        this.password = password
    }

    session(){
        return this.session
    }

    static register(callback){
        fs.readFile('./employee.json', 'utf8', function(err, data){
            if (err) throw err
            let getUsername = _argv[3]
            let getPassword = _argv[4]
            let getPosition = _argv[5]
            let list = JSON.parse(data)

            list.push({username: getUsername, password: getPassword, role: getPosition, login: false})
            let listUpdate = JSON.stringify(list)

            fs.writeFile('./employee.json', listUpdate)

            callback(list)
        })
    }

    static login(callback){
        fs.readFile('./employee.json', 'utf8', function(err, data) {
        if (err) throw err;
        let userLogin = _argv[3]
        let passwordLogin = _argv[4]
        let list = JSON.parse(data)

        let loginCheck = false;
        for(let i=0; i<list.length; i++){
            if(list[i].username === userLogin && list[i].password === passwordLogin){
                loginCheck = true
                list[i].login = true
            }
        }

        let listUpdate = JSON.stringify(list)

        // notifikasi kirim ke view
        let notifikasiLogin = '';
        if(loginCheck === true){
            notifikasiLogin += `user ${userLogin} logged in succesfully`
        } else {
            notifikasiLogin += `username / password wrong!!`
        }

        fs.writeFile('./employee.json', listUpdate)

        callback(notifikasiLogin)
        
      });
    }
    
}


let mod = new ModuleEmployee()
console.log(mod.session)

module.exports = ModuleEmployee


