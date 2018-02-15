class PatientView {
    static successAdd(totalData) {
        console.log("Data Pasien berhasil ditambahkan " + newEmployee.username  + ". Total data pasien : " + totalData);
    }

    static failedAdd(username) {
        console.log("tidak memiliki akses untuk add patient");
        
    }

    static addStatus(totalData) {
        if(totalData > 0) {
            console.log("Data Pasien berhasil ditambahkan. Total data pasien : " + totalData);
        } else {
            console.log("tidak memiliki akses untuk add patient");
        }
    }
}

module.exports = PatientView;