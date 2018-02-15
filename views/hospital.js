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
}

module.exports = V_Hospital