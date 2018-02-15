class EmployeeView {
    static register (profile, count){
        console.log(`> save data sucess ${profile}. Total employee: ${count}`)
    }
    static loginSuccess(name){
        console.log(`> user ${name} logged in successfully!`)
    }
    static loginFail(){
        console.log('> username / password wrong')
    }
    static logout(){
        console.log('> anda telah berhasil logout')
    }
}

module.exports = EmployeeView