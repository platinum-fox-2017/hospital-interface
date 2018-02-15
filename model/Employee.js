class Employee {
    constructor(name, position, username, password) {
      this.name = name
      this.position = position
      this.username = username
      this.password = password
      this.isLoggedIn = false;
    }

    // get isLoggedIn(){
    //   return this._isLoggedIn;
    // }
    // set isLoggedIn(isLoggedIn){
    //   this._isLoggedIn = isLoggedIn;
    // }
}

module.exports = Employee;