const fs = require('fs')

class EmployeeModel {
    static storeEmployee(username,password,role,callbackView,callbackHospital) {
        fs.readFile('./employee.JSON', 'utf8', function (err, data) {
            if (err) throw err;
            let dataJSON            = JSON.parse(data);
            let newUser             = {};
            if (dataJSON.length <= 0) {
                newUser.id              = 1;    
            } else {
                let lastId              = dataJSON[dataJSON.length-1].id;
                newUser.id              = lastId + 1;
            }
            
            newUser.username        = username;
            newUser.password        = password;
            newUser.isLogin         = false;
            newUser.role            = role;


            dataJSON.push(newUser);
            var totalData = dataJSON.length;

            let dataToWrite = JSON.stringify(dataJSON);
            
            fs.writeFile('./employee.JSON', dataToWrite , (err) => {
                if (err) throw err;
                callbackView(newUser,totalData);
                // callbackHospital(newUser);
            });

        });
    }

    static Login(username,password,callback) {
        fs.readFile('./employee.JSON', 'utf8', function (err, data) {
            if (err) throw err;
            let dataJSON = JSON.parse(data);

            var usernameLogin = ''
            for(let i = 0; i < dataJSON.length; i++) {
                if((username == dataJSON[i].username) && (password == dataJSON[i].password)) {
                    for(let j = 0; j < dataJSON.length; j++) {
                        dataJSON[j].isLogin = false;
                    }
                    dataJSON[i].isLogin = true;
                    usernameLogin    = dataJSON[i].username;
                }
            }

            let dataToWrite = JSON.stringify(dataJSON);
            
            fs.writeFile('./employee.JSON', dataToWrite , (err) => {
                if (err) throw err;
                callback(usernameLogin);
            });
        });
    }

    static logout(callback) {
        fs.readFile('./employee.JSON', 'utf8', function (err, data) {
            if (err) throw err;
            let dataJSON = JSON.parse(data);

            var usernameLogin = ''
            for(let i = 0; i < dataJSON.length; i++) {
                dataJSON[i].isLogin = false;
            }

            let dataToWrite = JSON.stringify(dataJSON);
            
            fs.writeFile('./employee.JSON', dataToWrite , (err) => {
                if (err) throw err;
                callback();
            });
        });
    }

    static addPatient(name,illness,callbackPatient,callbackView) {        
        fs.readFile('./employee.JSON', 'utf8', function (err, data) {
            if (err) throw err;
            let dataJSON = JSON.parse(data);
            var cek      = false;
            for(let i = 0; i < dataJSON.length; i++) {
                if((dataJSON[i].role == 'doctor') && (dataJSON[i].isLogin == true)) {
                    callbackPatient(name,illness,dataJSON[i].username,callbackView)
                    cek = true;
                }
            }

            if(cek == false) {
                callbackView(0)
            }         
        });
    }
}

module.exports = EmployeeModel;