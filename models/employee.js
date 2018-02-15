const fs = require('fs')

class Employee {
    constructor(name, position, username, password, status) {
        this.name = name
        this.position = position
        this.username = username
        this.password = password
        this.status = status || false
    }

    static getData(callback) {
        fs.readFile('employee.json', 'UTF-8', (err, data) => {
                callback(JSON.parse(data))
        });
    }

    static writeFile(data,callback){
        fs.writeFile('employee.json', data, 'UTF-8', (err) => {
            if (err) throw err;
            callback(true)
        });
    }

    static registerFunc(data, callback) {
        Employee.getData((readFileData)=>{
            let newData = new Employee(data[0], data[2], data[0], data[1])
            readFileData.push(newData)
            Employee.writeFile(JSON.stringify(readFileData), status => {
                callback(newData, readFileData.length)
            })
        })
    }

    static loginFunc(data, callback) {
        Employee.getData(readFileData => {
            let count = 0;
            for (let i = 0; i < readFileData.length; i++) {
                if (readFileData[i].username === data[0] && readFileData[i].password === data[1]) {
                    readFileData[i].status = true
                    count++
                    let arrSession = new Array()
                    let sessionObj = {
                        username: readFileData[i].username,
                        position: readFileData[i].position
                    }
                    arrSession.push(sessionObj)

                    // console.log(JSON.stringify(arrSession));
                    // console.log(readFileData);
                    
                    fs.writeFile('session.json', JSON.stringify(arrSession), (err) => {
                        if (err) throw err;
                        // console.log('The file has been saved!');
                    });

                    Employee.writeFile(JSON.stringify(readFileData), status => {
                        callback(data[0], readFileData[i].status)
                    })
                } 
            }
            if (count === 0) {
                callback(data[0], false)
            }
        })
    }

    static logoutFunc(callback) {
        let arrLogout = []
        fs.writeFile('session.json', JSON.stringify(arrLogout), (err) => {
            if (err) throw err;
            let data = 'Berhasil logout'
            callback(data)
        });
    }

}

module.exports = Employee