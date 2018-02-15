class PatientView {
    static addPatient(total){
        console.log('> data pasien berhasil ditambahkan. Total data pasien : '+ total)
    }
    static error(){
        console.log('> tidak memiliki akses untuk add patient')
    }
}

module.exports = PatientView