"use strict"

class PatientVIew {
    static addPatient(data) {
        console.log(`data pasien berhasil ditambahkan. Total data pasien : ${data.length}`)
    }
    static accessDenied() {
        console.log(`tidak memiliki akses untuk add patient`)
    }
}

module.exports = PatientVIew;