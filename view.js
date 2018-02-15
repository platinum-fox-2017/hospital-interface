

class ViewHospital{
    constructor(){

    }

    static successAdd(objEmployee, totalData){
        console.log('save data success : ' +objEmployee.username + '\n' +'Total Employee : ' +totalData)
    }

    static resultLogin(result, username){
        if(result == true){
        console.log('user '+username +' logged in succesfully')
        }
        else{
            console.log('username / password wrong')
        }
    }

}

module.exports = ViewHospital