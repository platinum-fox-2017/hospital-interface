class ViewPatient {

    static addPatient(patients) {
        console.log(`data pasien berhasil ditambahkan. Total data pasien : ${patients.length}`);
    }

    static addPatientError() {
        console.log('tidak memiliki akses untuk add patient');
    }

}


module.exports = ViewPatient;