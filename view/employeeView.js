"use strict"

class EmployeeView {
    static register(data) {
        console.log(`save data success {"username:"${data[data.length-1].username}", "password":"${data[data.length-1].password}", "role":"${data[data.length-1].role}"}. Total Employee : ${data.length}`)
    }

    static login(status, data) {
        if(status) {
            console.log(`user ${data.username} logged in successfully`)
        }
        else {
            console.log(`username / password wrong`)
        }
    }

    static logout(status) {
        if(status) {
            console.log(`logged out`)
        } else {
            console.log(`You are not logged in`)
        }
    }
}

module.exports = EmployeeView;