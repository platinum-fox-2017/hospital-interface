class View{
    static register(data, employee,flag){
        if(flag)
            console.log(`save data success ${JSON.stringify(employee)}. Total employee : ${data.length}`);
        else {
            console.log(`${employee.username} sudah terdaftar. Tidak dapat registrasi kembali`);
        }
    }

    static login(username,flag){
        if(flag){
            console.log(`user ${username} logged in successfully`);
        }
        else{
            console.log(`username / password wrong`);
        }
    }

    static addPatient(data, flag){
        if(flag){
            console.log(`Data pasien berhasil ditambahkan. Total data pasien : ${data.length}`);
        }
        else{
            console.log("Tidak memiliki akses untuk add patients!");
        }
    }

    static logout(username){
        console.log(`User ${username} sudah berhasil logout`);
    }
}

module.exports = View;
