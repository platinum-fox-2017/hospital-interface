class View {
    static registerFunc(data, length) {
        console.log(`save data success {"username:":"${data.name}","password":"${data.password}","role":"${data.position}"}. Total employee: ${length}`)
    }

    static loginFunc(data, status) {
        if (status === true) {
            console.log(`user ${data} logged in successfully`)
        } else {
            console.log(`username / password wrong`)
        }
    }

    static addPatientFunc(status, data) {
        if (status === true) {
            console.log(`data pasien berhasil ditambahkan. Total data pasien: ${data}`)
        } else {
            console.log(`tidak memiliki akses untuk add patient`)
        }
    }

    static logoutFunc(data) {
        console.log(data)
    }
}

module.exports = View