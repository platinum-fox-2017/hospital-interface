class AddPatientView {
  static viewAddPatient(input,angka){
    if(input===false){
      console.log(`Tidak memiliki akses untuk add patient`);
    } else {
      console.log(`Data pasien berhasil ditambahkan. Total data pasien: ${angka}`);
    }
  }
}

module.exports = AddPatientView;
