"use strict"

class EmployeeView {
    static help() {
        console.log(`
        $ node index.js login <username> <password>
        $ node index.js register <username> <password> <role>
        $ node index.js logout
        $ node index.js addPatient <patient_name> <symptom>

        # Only role: 'dokter' can do addPatient
        `)
    }

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

    static isLoggedIn() {
        console.log(`Logout before new login`);
    }

    static accessDenied() {
        console.log(`tidak memiliki akses untuk add patient`)
    }

}

module.exports = EmployeeView;