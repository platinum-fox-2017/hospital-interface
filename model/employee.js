const fs = require('fs')
const Employee = require('../class/employee.js')

class EmployeeModel {
    static register(name, password, position, callback){
        fs.readFile('data/employee.json', 'utf8', (err1, data1) => {
            if (err1) throw err1
            else {
                let database = JSON.parse(data1)
                let count = database.length+1
                let profile = new Employee(name, password, position, false)
                database.push(profile)
                fs.writeFile('data/employee.json', JSON.stringify(database), 'utf8', (err2, data2) => {
                    if (err2) throw err2
                    else {
                        callback(profile, count)
                    }
                })
            }
        })
    }
    static login (username, password, callback1, callback2){
        fs.readFile('data/employee.json', 'utf8', (err, data) => {
            if (err) throw err
            else {
                let database = JSON.parse(data)
                for (let j = 0; j < database.length; j++){
                    database[j].login = false
                }
                for (let i = 0; i < database.length; i++){
                    if (database[i].username === username && database[i].password === password){
                        database[i].login = true
                        fs.writeFile('data/employee.json', JSON.stringify(database), 'utf8', (err1, data1) => {
                            if (err1) throw err1
                        })
                        return callback1(username)
                    }
                }
                return callback2()
            }   
        })
    }
    static logout(callback){
        fs.readFile('data/employee.json', 'utf8', (err, data) => {
            if (err) throw err
            else {
                let database = JSON.parse(data)
                for (let i = 0; i < database.length; i++){
                    database[i].login = false
                }
                fs.writeFile('data/employee.json', JSON.stringify(database), 'utf8', (err1, data1) => {
                    if (err1) throw err2
                    else {
                        callback()
                    }
                })
            }
        })
    }

}

module.exports = EmployeeModel