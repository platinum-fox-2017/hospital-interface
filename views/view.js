class V_Hospital{
    static showRegisEmp(newEmployee, length){
        console.log(`save data success ${newEmployee}. Total employee : ${length}`)
    }
    static showLoginStatus(username, status){
        if( status ==='success'){
            console.log(`user ${username} logged in successfully`)
        }else{
            console.log(`username / password wrong`)
        }
    }
    static showAddPatient(status, length){
        if(status === true){
            console.log(`data pasien berhasil ditambahkan. Total data pasien : ${length}`)
        }else{
            console.log('tidak memiliki akses untuk add patient')
        }
    }
}

module.exports = V_Hospital