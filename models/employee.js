const fs = require('fs')

class Employee {

    static registerEmployee(name, password, role, callback) {
        fs.readFile('./employee.json', 'utf-8', (err, data) => {
            let dataArray = JSON.parse(data)
            let empobject =
                {
                    username: name,
                    password: password,
                    role: role
                }
            dataArray.push(empobject)
            let stringfy = JSON.stringify(dataArray)
            let dataNewEmployee = JSON.stringify(empobject)
            fs.writeFile('./employee.json', stringfy, function (err, data) {
                callback(dataNewEmployee, dataArray.length)
            })
        })
    }

    static loginEmployee(name, password, callback) {
        fs.readFile('./employee.json', 'utf-8', (err, data) => {
            let dataArray = JSON.parse(data)
            let empobject =
                {
                    username: name,
                    password: password
                }
            for (let i = 0; i < dataArray.length; i++) {
                if (dataArray[i].username === empobject.username && dataArray[i].password === empobject.password) {
                    let dataNewEmployee = JSON.stringify(dataArray[i])
                    fs.writeFile('./session.json', dataNewEmployee, (err, data) => {
                        callback(dataArray[i])
                    })
                }
            }

            callback(null)
        })

    }
}

module.exports = Employee