class EmployeeView{
    constructor(){}

    static showTotal(total){
        if(total === false){
            console.log("username ini sudah pernah dibuat")
        }else{
            console.log(`Total employe: ${total}`)
        }
    }

    static showLoginRespons(respons,status){
        if (status === true){
            console.log(`User ${respons} logged in succesfully`)
        }else{
            console.log(respons)
        }
    }

    static logOut(name){
        if(name === undefined){
            console.log(`Nobody has logged in before`)
        }else{
            console.log(`Username ${name} has succesful logged out`)
        }
    }
}

module.exports = EmployeeView