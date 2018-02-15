class Patient {
    static printedPatient(data) {
        if (data === null) {
            console.log(`> tidak memiliki akses untuk add patient`)

        } else {
            console.log(`> data pasien berhasil ditambahkan. Total data pasien : ${data}`)
        }
    }
}

module.exports = Patient